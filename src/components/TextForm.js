import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = function (event) {
    console.log('On change');
    setText(event.target.value);
  };

  const [text, setText] = useState('Enter text area');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-2"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
