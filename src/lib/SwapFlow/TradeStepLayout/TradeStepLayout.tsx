import { getClassName } from "@utils";
import { ReactNode } from "react";
import { Text } from "src/lib/components/Text/Text";
import { Spinner } from "../../components/Spinner/Spinner";
import { useTranslation } from "../context";
import "./style.css";

type Status = "success" | "error" | "loading";
export function TradeStepLayout({
  status,
  className = "",
  body,
  explorerUrl
}: {
  status?: Status;
  className?: string;
  body?: ReactNode;
  explorerUrl?: string;
}) {
  return (
    <div className={`${getClassName("TradeStepLayout")} ${className}`}>
      <Logo status={status} />
      <div className={getClassName("TradeStepLayoutBody")}>{body}</div>
      <Footer status={status} explorerUrl={explorerUrl} />
    </div>
  );
}

const Footer = ({
  status,
  explorerUrl,
}: {
  status?: Status;
  explorerUrl?: string;
}) => {
  const t = useTranslation()
  const content =
    status === "loading" ? (
      <Text>{t.proceedInWallet}</Text>
    ) : explorerUrl && status === "success" ? (
      <TxHash explorerUrl={explorerUrl} />
    ) : null;

  return <div className={getClassName("TradeStepLayoutFooter")}>{content}</div>;
};

const TxHash = ({ explorerUrl }: { explorerUrl: string }) => {
  const t = useTranslation()

  return (
    <a
      target="_blank"
      className={getClassName("TradeStepLayoutFooterHash")}
      href={explorerUrl}
    >
     {t.viewOnExplorer}
    </a>
  );
};

function Success() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className={getClassName("TradeStepLayoutSuccessIcon")}
    >
      <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-3.97-3.03a.75.75 0 00-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-.01-1.05z" />
    </svg>
  );
}

function Error() {
  return (
    <svg
      className={getClassName("TradeStepLayoutErrorIcon")}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 003 21h18a.998.998 0 00.883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
    </svg>
  );
}

const Logo = ({ status }: { status?: Status }) => {
  if (status === "success") {
    return <Success />;
  }

  if (status === "error") {
    return <Error />;
  }

  return <Spinner size={60} borderWidth={5} />;
};
