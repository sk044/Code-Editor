import React, { useState } from "react";
import ReactDOM from "react-dom";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";


import "./styles.css";
import "./prism.css";

const defCode = `
//Welcome User, you can change languages from the top right

//Here's a basic example
//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
`;

export default function CodeEditor() {

  const [code, setCode] = useState(defCode);
  const [language, setLanguage] = useState('js');
  const [converter, setConverter] = useState(languages.js);

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
    if(event.target.value === 'c'){
      console.log('Language set to C');
      setConverter(languages.c);
    }
    else if(event.target.value === 'cpp'){
      console.log('Language set to C++');
      setConverter(languages.cpp);
    }
    else if(event.target.value === 'js'){
      console.log('Language set to Javascript');
      setConverter(languages.js);
    }
    else if(event.target.value === 'haml'){
      console.log('Language set to HTML');
      setConverter(languages.html);
    }
    else if(event.target.value === 'java'){
      console.log('Language set to Java');
      setConverter(languages.java);
    }
    else if(event.target.value === 'css'){
      console.log('Language set to CSS');
      setConverter(languages.css);
    }

  };

    return (
      <div>
        <div className="editor">
         
          <select className="langSelect" value={language} onChange={changeLanguage}>
            <option value="js">Javascript</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="haml">HTML</option>
            <option value="css">CSS</option>
          </select>
          <h2><span style={{color: "#edb68e"}}>C</span>ode <span style={{color: "#edb68e"}}>E</span>ditor</h2>

          <Editor
            className="box"
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, converter)}
            padding={10}
            // style={{overflowY : 'auto'}}
          />
        </div>
      </div>
    );
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CodeEditor />, rootElement);
