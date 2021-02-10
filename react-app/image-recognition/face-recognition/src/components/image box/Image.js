import React from 'react';
import './Image.css';

const Image= ({imageUrl})=>{
    return(
        <div className="wrap">
            <div className="image">
                <img alt=''  src={imageUrl}/>
            </div>
            
        </div>
    )
}
export default Image;