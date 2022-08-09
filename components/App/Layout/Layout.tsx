import React from "react";
import styles from "./Layout.module.scss";
interface ILayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<ILayoutProps> & {
  StepsLayout: React.FunctionComponent<IStepsLayoutProps>;
} = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutGradientColumn}></div>
      <div className={styles.layoutHeader}>
        <h1 className={styles.layoutLogo}>CHATTO</h1>
        <div className={styles.layoutGradientLine}></div>
      </div>
      <div className={styles.layoutContent}>{children}</div>
    </div>
  );
};
interface IStepsLayoutProps {
  children: React.ReactNode;
  text: string;
}
const StepsLayout: React.FC<IStepsLayoutProps> = ({ children, text }) => {
  return (
    <div className={styles.layoutStep}>
      <h2 className={styles.layoutStepTitle}>{text}</h2>
      {children}
    </div>
  );
};

Layout.StepsLayout = StepsLayout;
