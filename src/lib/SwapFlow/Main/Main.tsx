import { getClassName } from "@utils";
import { ReactNode, useRef, useState } from "react";
import { FlexColumn } from "src/lib/components/BaseStyles/BaseStyles";
import { Text } from "src/lib/components/Text/Text";
import { useMainContext } from "../context";
import "./style.css";
import { SwapDetail, SwapStatus } from "src/lib/type";
import CheckIcon from "src/lib/icons/check";
import XIcon from "src/lib/icons/x";

const DetailsList = ({
  items,
  className,
}: {
  items: SwapDetail[];
  className?: string;
}) => {
  return (
    <div className={`${getClassName("SwapDetailsList")} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={`${getClassName("SwapDetailsItem")}`}>
          <div className={`${getClassName("SwapDetailsItemLabel")}`}>
            {item.label}
          </div>
          <div className={`${getClassName("SwapDetailsItemValue")}`}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

const SwapDetails = () => {
  const { swapDetails, swapStatus, steps } = useMainContext();
  const [isOpen, setIsOpen] = useState(false);
  const bottomItemsRef = useRef<HTMLDivElement>(null);

  if (swapStatus || steps?.length === 1) return null;
  return (
    <div className={`${getClassName("SwapDetails")}`}>
      <div
        className={`${getClassName("SwapDetailsToggle")}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${getClassName("SwapDetailsToggleTrigger")}`}>
          {isOpen ? "Show less" : "Show more"}
        </div>
      </div>
      <DetailsList
        items={swapDetails.slice(0, 2)}
        className={`${getClassName("SwapDetailsTopItems")}`}
      />
      <div
        style={{
          height: isOpen ? bottomItemsRef.current?.clientHeight : 0,
          overflow: "hidden",
          transition: "height 0.2s ease-in-out",
        }}
      >
        <DetailsList
          items={swapDetails.slice(2)}
          className={`${getClassName("SwapDetailsBottomItems")}`}
        />
      </div>

      <div
        className={`${getClassName("SwapDetailsBottomItemsRef")}`}
        ref={bottomItemsRef}
      >
        <DetailsList
          items={swapDetails.slice(2)}
          className={`${getClassName("SwapDetailsBottomItems")}`}
        />
      </div>
    </div>
  );
};

const Steps = () => {
  const { steps, swapStatus, stepIndex = 0, components } = useMainContext();
  if (!swapStatus) return null;

  const SuccessIcon = components?.SuccessIcon || <CheckIcon />;
  const FailedIcon = components?.FailedIcon || <XIcon />;

  return (
    <FlexColumn className={`${getClassName("Steps")}`}>
      {steps?.map((step, index) => {
        const isActive = stepIndex >= index;
        const stepPassed = stepIndex > index;
        const isLast = index === steps?.length - 1;
        const showSuccessIcon =
          (isLast && swapStatus === SwapStatus.SUCCESS) || stepPassed;
        const showFailedIcon =
          stepIndex === index && swapStatus === SwapStatus.FAILED;
        const showLoader = stepIndex === index && swapStatus === SwapStatus.LOADING;

        return (
          <div
            key={index}
            className={`${getClassName("Step")} ${
              isActive ? getClassName("StepActive") : ""
            }`}
          >
            <div className={`${getClassName("StepLogo")}`}>
             {showLoader && <div className="pulse-border" />}
              <div className={`${getClassName("StepLogoInner")}`}>
                {step.logo}
              </div>
            </div>  

            <div className={`${getClassName("StepContent")}`}>
              <div className={`${getClassName("StepTitle")}`}>{step.title}</div>
            {step.description &&   <div className={`${getClassName("StepDescription")}`}>
                {step.description}
              </div>}
            </div>
            {(showSuccessIcon || showFailedIcon) && (
              <div className={`${getClassName("StepIcon")}`}>
                {showFailedIcon ? FailedIcon : SuccessIcon}
              </div>
            )}
          </div>
        );
      })}
    </FlexColumn>
  );
};

export const Main = () => {
  return (
    <FlexColumn>
      <TokensDisplay />
      <SwapDetails />
      <Steps />
    </FlexColumn>
  );
};

export const TokenDisplay = ({
  amount,
  tokenSymbol,
  tokenLogo,
  usd,
  title,
  Logo: CustomLogo,
}: {
  amount?: string;
  tokenSymbol?: string;
  tokenLogo?: string;
  usd?: ReactNode;
  title: ReactNode;
  Logo?: ReactNode;
}) => {
  return (
    <div className={`${getClassName("MainToken")}`}>
      <div className={`${getClassName("MainTokenLeft")}`}>
        <div className={`${getClassName("MainTokenTitle")}`}>{title}</div>
        <Text className={` ${getClassName("MainTokenAmount")}`}>{`${
          amount && amount.toString() != "0" ? amount : ""
        } ${tokenSymbol || ""}`}</Text>
        {usd && <div className={` ${getClassName("MainTokenUsd")}`}>{usd}</div>}
      </div>
      <div className={` ${getClassName("MainTokenLogo")}`}>
        {CustomLogo ? (
          CustomLogo
        ) : tokenLogo ? (
          <img src={tokenLogo} alt={"Token logo"} />
        ) : null}
      </div>
    </div>
  );
};

export const TokensDisplay = () => {
  const {
    inTokenSymbol,
    inTokenLogo,
    outTokenSymbol,
    outTokenLogo,
    inAmount,
    outAmount,
    inUsd,
    outUsd,
    components,
    fromTitle,
    toTitle,
  } = useMainContext();
  return (
    <div className={`${getClassName("Main")}`}>
      <TokenDisplay
        title={fromTitle || "Swap from"}
        usd={inUsd}
        tokenSymbol={inTokenSymbol}
        tokenLogo={inTokenLogo}
        amount={inAmount}
        Logo={components?.SrcTokenLogo}
      />
      <TokenDisplay
        title={toTitle || "Swap to"}
        usd={outUsd}
        tokenSymbol={outTokenSymbol}
        tokenLogo={outTokenLogo}
        amount={outAmount}
        Logo={components?.DstTokenLogo}
      />
    </div>
  );
};
