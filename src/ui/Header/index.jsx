import styles from "./style.module.css";
import menuIcon from "../../assets/icons/menuIcon.png";
import logoIcon from "../../assets/icons/logoIcon.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import { useState } from "react";
import Menu from "../Menu";

function Header({ setValue }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerOpenMenu = () => setIsOpenMenu(true);
  const handlerCloseMenu = () => setIsOpenMenu(false);

  const handlerFilteredData = (event) => setValue(event.target.value)

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img
          src={menuIcon}
          alt="menu"
          width="25px"
          height="17px"
          onClick={handlerOpenMenu}
          className={styles.menuIcon}
        />
        <div
          className={
            isOpenMenu
              ? styles.openMenuForTelephone
              : styles.closeMenuForTelephone
          }
        >
          <Menu handlerCloseMenu={handlerCloseMenu} />
        </div>
      </div>
      <img src={logoIcon} alt="logo" width="10%" height="25px" className={styles.logoIcon} />
      <div className={styles.rightSide}>
        <input type="text" onChange={event => handlerFilteredData(event)} />
        <img src={searchIcon} alt="search" width="16px" height="16px" />
      </div>
    </div>
  );
}

export default Header;