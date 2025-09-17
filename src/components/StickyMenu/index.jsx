import Menu from "../../ui/Menu";
import styles from "./style.module.css";
import { useState } from "react"

function StickyMenu() {
  const [isAnimated, setIsAnimated] = useState(false)

  useState(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.menuContainer} ${isAnimated ? styles.animated : ""}`}>
      <Menu />
    </div>
  );
}

export default StickyMenu