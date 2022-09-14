import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
interface ILayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.landingLayout}>
      <Header />

      {children}
    </div>
  );
};

export default Layout;
