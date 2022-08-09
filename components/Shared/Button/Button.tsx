import React from 'react'
import styles from "./Button.module.scss";
interface IButtonProps{
  children?:React.ReactNode;
  disabled?:boolean;
  type?: "button" | "submit";
}
const Button:React.FC<IButtonProps> = ({children, type = "button",...props}) => {
  return <button {...props} className={styles.button}>{children}</button>
}

export default Button;