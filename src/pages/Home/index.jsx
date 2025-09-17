import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Card from "../../components/Card";

function Home({ value }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const filteredData = data.filter(info => info.tags.toLowerCase().includes(value.toLowerCase()) || info.title.toLowerCase().includes(value.toLowerCase()) || info.text.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className={styles.container}>
      {filteredData.map((info, index) => (
        <Card
          autor={info.autor}
          date={info.date}
          picture={info.img}
          bigPicture={info.img_2x}
          tags={info.tags}
          text={info.text}
          title={info.title}
          views={info.views}
          key={index}
        />
      ))}
    </div>
  );
}

export default Home;
