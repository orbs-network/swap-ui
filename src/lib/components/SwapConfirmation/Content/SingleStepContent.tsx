
import styles from "../../../styles/SingleStepContent.module.css"; // Import the CSS module
import { Step } from "../../../type";
import { Spinner } from "../../Spinner";
import { TradeContainer } from "../TradeContainer";

export function SingleStepContent({step}:{step?:Step}) {
  return (
    <TradeContainer
      variant="pending"
      topElement={<Spinner size={50} borderWidth={5} />}
      title={<Title step={step} />}
      bottomElement={<BottomContent />}
    />
  );
}

const BottomContent = () => {
  return <>Proceed in wallet</>;
};

const Title = ({step}:{step?: Step}) => {

  return (
    <p className={styles.swapTitle}>
      {step?.title}
    </p>
  );
};
