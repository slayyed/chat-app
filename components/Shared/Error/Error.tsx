import React, { MouseEventHandler } from "react";
import styles from "./Error.module.scss";
interface IErrorProps{
  text:string;
  onClose:MouseEventHandler;
}

const Error:React.FC<IErrorProps> = ({text,onClose}) => {
  return (
    <div className={styles.error}>
      <div className={styles.errorContainer}>
        <img className={styles.errorCloseIcon} src="/images/svg/close-icon.svg" onClick={onClose}/>
        <div className={styles.errorContent}>
          <img className={styles.errorImage} src="/images/error.png" />
          <div className={styles.errorTitle}>Ой-ё-ёюшки.</div>
          <div className={styles.errorText}>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
