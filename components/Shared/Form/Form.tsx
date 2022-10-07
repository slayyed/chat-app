import clsx from "clsx";
import React from "react";

// import { useQuery, gql, useMutation } from "@apollo/client";
// import AuthQueryList from "../../../graphql/auth.query";
import styles from "./Form.module.scss";
interface IFormProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler;
  className?: string;
  method?: "GET" | "POST";
  action?: string;
}
interface IFormItemProps {
  children: React.ReactNode;
  className?: string;
  label: string;
}

interface IFormFooterProps {
  children: React.ReactNode;
  className?: string;
}

const Form: React.FC<IFormProps> & {
  Item: React.FunctionComponent<IFormItemProps>;
  Footer: React.FunctionComponent<IFormFooterProps>;
} = ({
  onSubmit = function onSubmit(data) {
    console.log(data);
  },
  children,
  className = "",
  ...props
}) => {
  const classes = clsx({
    [styles.form]: styles.form,
    [className]: !!className,
  });
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
  const classes = clsx({
    [styles.formLabel]: styles.formLabel,
    [className]: !!className,
  });
  return (
    <label className={classes}>
      <p className={styles.formLabelText}>{label}</p>
      {children}
    </label>
  );
};

Form.Item = FormItem;

const FormFooter: React.FC<IFormFooterProps> = ({
  children,
  className = "",
}) => {
  const classes = clsx({
    [styles.formFooter]: styles.formFooter,
    [className]: !!className,
  });
  return <div className={classes}>{children}</div>;
};
Form.Footer = FormFooter;

export default Form;
