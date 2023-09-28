import React from 'react'
import './styles.css'
const GotItButton = (props) => {
const handleGotIt = (e)=>{
  props.actions.handlesendMessage();
console.log(props);
e.target.className="hidebtn";
}

  return (
    <button onClick={handleGotIt}>GotItButton</button>

  )
}

export default GotItButton