import React , {useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState('');
    const [number , setnumber] = useState([]);
    const handleUpClick = () => {
// console.log("Uppercase was clicked" + text);
let newText = text.toUpperCase();
setText(newText)
props.tAlert("Text has been Upper Case" , "success");
    }

    const handleLoClick = () => {
// console.log("Lowercase was clicked" + text);
let newText = text.toLowerCase();
setText(newText)
props.tAlert("Text has been Lower Case" , "success");
    }

    const handleClearClick = () => {
let newText = '';
let extract = '';
setText(newText)
setnumber(extract || []);
props.tAlert("Text has been Clear" , "success");
    }

    const handleNumberClick = () => {
let extract = text.match(/\d+/g);
// setnumber(extract || []);
if (!extract || extract.length === 0) {
  setnumber(["No Number In Text"]);
  props.tAlert("No Number In Text" , "warning");
    }
    else {
      setnumber(extract);
      props.tAlert("Text has been Extract Number" , "success");
    }
    }

    const handleOnChange = (event)=> {
// console.log("On Change");
setText(event.target.value)
    }

    const textCopyClick = () => {
      navigator.clipboard.writeText(text);
      props.tAlert("Text has been Copy" , "success");
    }
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="mt-4">{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="mytext" onChange={handleOnChange} value={text} style={{backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white' , color : props.mode === 'dark'?'white':'#042743'}} rows="9"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert in to Upercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert in to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleNumberClick}>Extract Number</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={textCopyClick}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color : props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words ad {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minute read</p>
      <h2>Preview</h2>
<p>{text.length>0?text:"Enter The Text"}</p>
<h2>Extract Number</h2>
<ul>
        {number.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
    </>
  )
}