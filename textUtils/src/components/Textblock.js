import React, { useState } from "react";

export default function Textblock(props) {
  const [text, setText] = useState("");

  const upperCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Uppercase!", "success");
  };

  const lowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to Lowercase!", "success");
  };

  const clearText = ()=>{
    setText("");
    props.showAlert("Textbox is cleared!", "success");
  };

  const copyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied!", "success");
  };

  const removeSpace = ()=>{
    let arr = text.split(/[ ]+/);
    setText(arr.join(" "));
    props.showAlert("All extra spaces are removed!", "success");
  };

  const handleOnChange = (event)=>{
    setText(event.target.value)
  };

  let i=0;
  text.split(" ").forEach((entry) => entry !==""?++i:i);

  return (
    <>
    <div className="container">
      <h1 style={{color: props.mode==='light'?"black":"white", marginTop:'10px'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{color: props.mode==='light'?"black":"white", backgroundColor: props.mode==='light'?"white":"#474646"}}
        ></textarea>
      </div>
      <button className={`btn btn-primary mx-2`} onClick={upperCase}>Convert to Uppercase</button>
      <button className={`btn btn-primary mx-2`} onClick={lowerCase}>Convert to Lowercase</button>
      <button className={`btn btn-primary mx-2`} onClick={clearText}>Clear text</button>
      <button className={`btn btn-primary mx-2`} onClick={copyText}>Copy text</button>
      <button className={`btn btn-primary mx-2`} onClick={removeSpace}>Remove Extra Spaces</button>
    </div>
    <div className="my-3" style={{color: props.mode==='light'?"black":"white"}}>
    <h5>Text Summary</h5>
    <p>{i} words and {text.length} characters</p>
    <h5>Preview</h5>
    <p>{text.length>0?text:"Write something in the text box to preview it here"}</p>
    </div>
    </>
  );
}
