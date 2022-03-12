import { useState } from "react";
import PropTypes from 'prop-types';
import handleClick from './App.jsx';
import calculate from "../logic/logic.js";
Button.propTypes = {
   handleClick: PropTypes.func,
 };
function Button(props){
    
     function handleClick(  ){ 
        props.clickHandler(props.buttonName, props.type);
    }
return (
    <button onClick = {handleClick}>
'       {props.buttonName}
'    </button>
)
}

export default Button;