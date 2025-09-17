import { Route, Routes } from "react-router-dom";
import styles from "./style.module.css";
import Home from "../../pages/Home";

function Main({ value }) {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Home value={value} />} />
            </Routes>
        </div>
    )
}

export default Main