import { useState } from "react";
import Header from "./ui/Header";
import Main from "./ui/Main";
import Footer from "./ui/Footer";
import Menu from "./ui/Menu";
import "./style.css";
import StickyMenu from "./components/StickyMenu";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Header setValue={setValue} />
      <StickyMenu />
      <Main value={value} />
      <Footer />
    </div>
  );
}

export default App;