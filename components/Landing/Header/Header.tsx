import clsx from "clsx";
import React, { useState } from "react";
import styles from "./Header.module.scss";
type Routes = "#home" | "#opportunities" | "#contacts" | "/register" | "/login";

const menuItems: Record<Routes, string> = {
  "#home": "Главная",
  "#opportunities": "Возможности",
  "#contacts": "Контакты",
  "/register": "Регистрация",
  "/login": "Войти",
};
const Header = () => {
  const [activeLink, setActiveLink] = useState<Routes>("#home");

  const linkStyles = (currentLink: Routes) =>
    clsx({
      [styles.landingHeaderLinks]: true,
      [styles.landingHeaderLinkActive]: currentLink === activeLink,
    });
  const menuStyles = clsx({
    [styles.landingHeader]: true,
  });
  function changeActiveLink(path: Routes) {
    setActiveLink(path);
  }

  return (
    <nav className={menuStyles}>
      <div className={styles.landingHeaderLogo}>CHATTO</div>
      <div className={styles.landingHeaderMenu}>
        <input
          type="checkbox"
          className={styles.landingHeaderMenuCheckbox}
          name=""
          id=""
        />
        <div className={styles.landingHeaderHamburgerLines}>
          <span
            className={`${styles.landingHeaderHamburgerLine} ${styles.landingHeaderHamburgerLineOne}`}
          ></span>
          <span
            className={`${styles.landingHeaderHamburgerLine} ${styles.landingHeaderHamburgerLineTwo}`}
          ></span>
          <span
            className={`${styles.landingHeaderHamburgerLine} ${styles.landingHeaderHamburgerLineThree}`}
          ></span>
        </div>
        <ul className={styles.landingHeaderList}>
          {Object.keys(menuItems).map((item) => (
            <li key={item} className={styles.landingHeaderListItems}>
              <a
                className={linkStyles(item as Routes)}
                href={item}
                onClick={() => changeActiveLink(item as Routes)}
              >
                {menuItems[item as Routes]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
