import styles from "../../styles/SwapConfirmationComponents.module.css"; // Import the CSS module


function IconArrowDownCircleFill() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"

    >
      <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z" />
    </svg>
  );
}


export const Separator = () => {
  return (
    <div className={styles.separator}>
      <div className={styles.separatorCenter}>
       <IconArrowDownCircleFill />
      </div>
    </div>
  );
};
