import { useEffect, useState } from "react";
import "./style.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

function App() {
  const [value, setValue] = useState("")

  return (
    <div className="App">
      <Header setValue={setValue} />
      <Main value={value} />
      <Footer />
    </div>
  );
}

export default App;