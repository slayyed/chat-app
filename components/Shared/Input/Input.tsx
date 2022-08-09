import clsx from "clsx";
import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  useState,
} from "react";
// import EyeCloseIcon from "../../Icons/EyeClose";
// import EyeOpenIcon from "../../Icons/EyeOpen";
// import EyeCloseIcon from '../../../assets/images/svg/closed-eye.svg'
// import EyeOpenIcon from '../../../assets/images/svg/open-eye.svg'
import styles from "./Input.module.scss";
interface IInputProps {
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler;
  onSuffixClick?: MouseEventHandler;
  isSuffixClickable?: boolean;
  className?: string;
  value?:string;
  name?: string;
  required?:boolean;
}

const Input: React.FC<IInputProps> & {
  Password: React.FunctionComponent<IInputProps>;
} = ({
  placeholder = "Введите что-то",
  prefix,
  suffix,
  type = "text",
  onChange = (e) => {},
  onSuffixClick,
  isSuffixClickable = false,
  className = "",
  ...props
}) => {
  const suffixStyle = clsx({
    [styles.inputSuffix]: true,
    [styles.inputSuffixClickable]: isSuffixClickable,
  });

  const classes = `${styles.input} ${className}`.trim();
  return (
    <div className={classes}>
      {prefix && <div className={styles.inputPrefix}>{prefix}</div>}
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={styles.inputField}
        {...props}
      />
      {suffix && (
        <div className={suffixStyle} onClick={onSuffixClick}>
          {suffix}
        </div>
      )}
    </div>
  );
};

const InputPassword: React.FC<Omit<IInputProps, "type" | "suffix">> = ({
  ...props
}) => {
  const [isVisibleData, setVisible] = useState<boolean>(false);
  return (
    <Input
      {...props}
      type={isVisibleData ? "text" : "password"}
      onSuffixClick={(e) => setVisible(!isVisibleData)}
      isSuffixClickable={true}
      suffix={isVisibleData ? <img src="/images/svg/closed-eye.svg"/> : <img src="/images/svg/open-eye.svg"/>}
    />
  );
};

Input.Password = InputPassword;

export default Input;
