import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button>
      {props.children}
    </button>
  );
};

const Application = () => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button>Reset</Button>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
