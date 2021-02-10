import React from 'react';
import './Input.css';

const Input =({onInputChange,onSubmit})=>{
    return(
        <div className="input">
            <input type='text' onInput={onInputChange}/>
            <button onClick={onSubmit}>cauta</button>
        </div>
    );
    
}
export default Input