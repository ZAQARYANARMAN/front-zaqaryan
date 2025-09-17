import { Link } from "react-router-dom";
import { data } from "./data";
import styles from "./style.module.css";
import logoIcon from "../../assets/icons/logoIcon.png";
import closeIcon from "../../assets/icons/closeIcon.png";

function Menu({ handlerCloseMenu }) {
  return (
    <div className={styles.container}>
        <div className={styles.topPart}>
            <img src={logoIcon} alt="logo" width="30%" height="24px" className={styles.logoIcon} />
            <img src={closeIcon} alt="close" width="18px" height="18px" onClick={handlerCloseMenu} className={styles.closeIcon} />
        </div>
      <div className={styles.menuList}>
        {data.map((element, index) => (
          <div className={styles.menuListBlock} key={index}>
            <h5>{element.title} ▾</h5>
            <div className={styles.menuListBlockLinkList}>
              {element.links.map((link, index) => (
                <Link to={link.link} key={index}>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;