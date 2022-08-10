import React from "react";

// import { useQuery, gql, useMutation } from "@apollo/client";
// import AuthQueryList from "../../../graphql/auth.query";
import styles from "./Form.module.scss";
interface IFormProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler;
  className?: string;
  method?:"GET" | "POST";
  action?:string;
}
interface IFormItemProps {
  children: React.ReactNode;
  className?: string;
  label: string;
}

const Form: React.FC<IFormProps> & {
  Item: React.FunctionComponent<IFormItemProps>;
} = ({
  onSubmit = function onSubmit(data) {
    console.log(data);
  },
  children,
  className = "",
  ...props
}) => {

  const classes = `${styles.form} ${className}`.trim();
  return (
    <form {...props} className={classes} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const FormItem: React.FC<IFormItemProps> = ({
  children,
  label,
  className = "",
}) => {
  const classes = `${styles.formLabel} ${className}`.trim();
  return (
    <label className={classes}>
      <p className={styles.formLabelText}>{label}</p> 
      {children}
    </label>
  );
};

Form.Item = FormItem;

export default Form;
