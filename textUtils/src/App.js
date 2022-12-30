import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textblock from "./components/Textblock";
import React, {useState} from 'react'
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggling = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#363333"
      showAlert("Dark mode is enabled!", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled!", "success")
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
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggling = {toggling}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Textblock heading="Enter your text here!" mode = {mode} showAlert = {showAlert}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
