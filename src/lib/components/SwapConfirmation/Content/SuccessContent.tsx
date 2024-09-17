import styles from "../../../styles/SuccessContent.module.css"; // Import the CSS module
import { TradeContainer } from "../TradeContainer";

import { ReactNode } from "react";

function Check() {
  return (
    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
      <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-3.97-3.03a.75.75 0 00-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-.01-1.05z" />
    </svg>
  );
}


export function SuccessContent({
  title,
  explorerUrl,
}: {
  title?: ReactNode;
  explorerUrl?: string;
}) {
  return (
    <TradeContainer
      variant="success"
      topElement={
        <div className={styles.check}>
          <Check />
        </div>
      }
      title={<Title>{title}</Title>}
      bottomElement={<TxHash explorerUrl={explorerUrl} />}
    />
  );
}

const Title = ({ children }: { children?: ReactNode }) => {
  return <div className={styles.title}>{children}</div>;
};

const TxHash = ({ explorerUrl }: { explorerUrl?: string }) => {
  return (
    <a
      target="_blank"
      className={`${styles.explorer}`} // Combine module and custom class names
      href={explorerUrl}
    >
      View on explorer
    </a>
  );
};
