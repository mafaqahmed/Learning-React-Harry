import React from "react";

export default function Alert(props) {
    const capitalize = (word) => {
        let loWord = word.toLowerCase();
        return (loWord.charAt(0).toUpperCase() + loWord.slice(1))
    }
  return (
    <div style = {{height: '50px'}}>
      {props.alert && (
        <div>
          <div className="alert alert-light bg-success text-light" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
          </div>
        </div>
      )}
    </div>
  );
}
