import React, { useState } from 'react';
import { ReactDOM } from 'react';
import './Display.css';

function Display(props){
    const [sign,setSign] = useState('');
    return (
        <div className='display'>
            <p> {sign + props.value}</p>
        </div>
    )
}

export default Display;