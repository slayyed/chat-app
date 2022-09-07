import clsx from "clsx";
import { useRouter } from "next/router";
import React, {
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../../Shared/Button/Button";
import styles from "./Header.module.scss";
const Header = () => {
  type Routes =
    | "#home"
    | "#opportunities"
    | "#contacts"
    | "/register"
    | "/login";

  const menuItems: Record<Routes, string> = {
    "#home": "Главная",
    "#opportunities": "Возможности",
    "#contacts": "Контакты",
    "/register": "Регистрация",
    "/login": "Войти",
  };
  const [activeLink, setActiveLink] = useState<Routes>("#home");
  const [isScreenScrolled, setScreenScrolledStatus] = useState(false);
  const linkStyles = (currentLink: Routes) =>
    clsx({
      [styles.landingHeaderLinks]: true,
      [styles.landingHeaderLinkActive]: currentLink === activeLink,
      [styles.landingHeaderLinkAuth]: currentLink === "/register",
    });
  const menuStyles = clsx({
    [styles.landingHeader]: true,
    [styles.landingHeaderBlack]: isScreenScrolled,
  });
  function changeActiveLink(path: Routes) {
    setActiveLink(path);
  }

  const handleScroll = () => {
    let isMenuShouldBeBlack = false;
    if (window.scrollY > 1080) isMenuShouldBeBlack = true;
    else isMenuShouldBeBlack = false;
    setScreenScrolledStatus(isMenuShouldBeBlack);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
  return (
    <nav className={menuStyles}>
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
    </nav>
  );
};

export default Header;
