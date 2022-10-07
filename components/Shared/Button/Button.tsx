import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";
interface IButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}
const Button: React.FC<IButtonProps> = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  const classes = clsx({
    [styles.button]: true,
    [className]: !!className,
  });
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
