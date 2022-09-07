import React from "react";
import styles from "./Button.module.scss";
interface IButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  className: string;
}
const Button: React.FC<IButtonProps> = ({
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button {...props} className={styles.button + " " + className}>
      {children}
    </button>
  );
};

export default Button;
