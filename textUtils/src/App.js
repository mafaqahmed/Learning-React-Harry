import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textblock from "./components/Textblock";
import React, {useState} from 'react'
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("white")

  const toggling = () => {
    if(mode === "dark") {
      setMode("light");
      setColor("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled!", "success")
    }
    else {
      setMode("dark");
      setColor("dark")
      document.body.style.backgroundColor = "#363333"
      showAlert("Dark mode is enabled!", "success")
    }
  }

  const showAlert = (msg, type) => {
    setAlert({
      message:msg,
      type:type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleColor = (event) => {
    setColor(event.target.value)
    document.body.style.backgroundColor = `${color}`;
  }

  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggling = {toggling} handleColor = {handleColor} color = {color}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Textblock heading="Enter your text here!" mode = {mode} showAlert = {showAlert} color = {color}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
