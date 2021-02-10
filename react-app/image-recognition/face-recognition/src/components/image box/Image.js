import React from 'react';
import './Image.css';

const Image= ({box,imageUrl})=>{
    return(
        <div className="wrap">
            <div className="image">
                <img id='inputImage' alt=''  src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={
                    {
                        top: box.topRow,
                        right:box.rightCol,
                        bottom:box.bottomRow,
                        left:box.leftCol
                    }
                }>

            </div>
            </div>
            
        </div>
    )
}
export default Image;