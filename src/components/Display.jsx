import React, { useState } from 'react';
import { ReactDOM } from 'react';
import './Display.css';

function Display(props){
    return (
        <div className='display'>
            <p> { props.value}</p>
        </div>
    )
}

export default Display;