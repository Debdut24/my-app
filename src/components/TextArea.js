import React,{useState} from 'react'
import PropTypes from 'prop-types'

function TextArea(props) {
  let [text,setText] = useState(""); 
  let [wordCount, setWordCount] = useState(0); 
  let [characterCount, setCharacterCount] = useState(0);

  const onTextChange = (props) =>{
    let newText = props.target.value;
    setText(newText);
    setCharacterCount(newText.length);
    let newArr = (newText.split(" "));
    let count = 0;
    for(let i=0;i<newArr.length;i++){
      if(newArr[i].length!==0){
        count++;
      }
    }
    setWordCount(count);
  };

  const onLowerCaseClick = () =>{
    setText(text.toLowerCase());
  };

  const onClearClick = () =>{
    setText('');
    setCharacterCount(0);
    setWordCount(0);
  };

  const onCopyClick = () =>{
    try{
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard');
    }catch(err){
      alert("Error! Unable to Copy :(");
      console.log(err);
    }
  };

  const onDowloadClick = () =>{
    const file = new Blob([text],{type:'text/plain'});
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const onUpperCaseClick = () =>{
    setText(text.toUpperCase());
  };

  return (
    <div>
        <div className="container my-3">
        <p className="heading">{props.heading}</p>
        <textarea className="form-control" value={text} onChange={onTextChange} aria-label="With textarea" rows={8}></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={onUpperCaseClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={onLowerCaseClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={onClearClick}>Clear</button>
          <button className="btn btn-primary my-3 mx-2" onClick={onCopyClick}>Copy to Keyboard</button>
          <button className="btn btn-primary my-3 mx-2" onClick={onDowloadClick}>Download</button>
        </div>
        <div className="container my-3">
          <h1>Your Text Summary:</h1>
          <p>{wordCount} words, {characterCount} characters</p>
        </div>
        <div className="container my-3">
          <h2>Preview</h2>
          <p>{text.length ===0?"Enter some text in the text box above": text}</p>
        </div>
    </div>
  )
}

TextArea.propTypes = {
    heading: PropTypes.string,
}

TextArea.defaultProps = {
    heading: "Enter your text here:"
}

export default TextArea

