import { useState } from "react";
import PropTypes from "prop-types"
import Button from './Button';

let i = 1;

ButtonsPanel.propTypes = {
    handleClick: PropTypes.func,
  };

function ButtonsPanel(props){
    return(
        <div className="buttonPanel">
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {1} key = {1}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {2} key = {2} />
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {3} key = {3} />
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {4} key = {4}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {5} key = {5}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {6} key = {6}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {7} key = {7}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {8} key = {8}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {9} key = {9}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "number" buttonName = {0} key = {0}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "operator" buttonName = "+" key = {"+"}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "operator" buttonName = '-' key = {"-"}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "operator" buttonName = "*" key = {"*"}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "operator" buttonName = "/" key = {"/"}/>
            <Button value = {props.value} setValue = {props.setValue} clickHandler = {props.handleClick} type = "operator" buttonName = "=" key = {"="}/>
        </div>
    );

}

export default ButtonsPanel;