import React from 'react';
import '../index.css';
const MediCard=({name,email})=>{

    return(
        <div className='card'>
            <img alt="ss" src=""/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
            
        </div>
    );
}

export default MediCard;