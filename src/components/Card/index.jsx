import { useState } from "react";
import styles from "./style.module.css";
import closeWhiteIcon from "../../assets/icons/closeWhiteIcon.png";

function Card({ picture, bigPicture, tags, title, autor, views, date, text }) {
  const [isFullInfo, setIsFullInfo] = useState(false)

  const handlerChangeIsFullInfo = () => setIsFullInfo(!isFullInfo)

  return (
    <div className={isFullInfo ? styles.fullInfoContainer : styles.container} onClick={handlerChangeIsFullInfo} >
      <img
        src={picture}
        srcSet={`${picture} 1x, ${bigPicture} 2x`}
        alt="picture"
        width="100%"
        height="260px"
      />
      <div className={styles.infoBlock}>
        <h6>{tags}</h6>
        <p className={styles.title}>{title}</p>
        <h5 className={styles.info}>
          {autor}{" "}
          <span>
            {date} {views} Views
          </span>
        </h5>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default Card;