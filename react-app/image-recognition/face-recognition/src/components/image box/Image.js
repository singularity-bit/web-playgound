import React from 'react';
import './Image.css';

const Image= ({box,imageUrl})=>{
    const items=box.map((boxes,index)=>{
        return (
            <div key={index} className='bounding-box' style={
                {
                    top: boxes.topRow,
                    right:boxes.rightCol,
                    bottom:boxes.bottomRow,
                    left:boxes.leftCol
                }
                }>
                
                </div>
        )
    })
    return(
        <div className="wrap">
            {
                //console.log("box image:",box)
            }
            <div className="image">
                <img id='inputImage' alt=''  src={imageUrl} width='500px' height='auto'/>
                    {
                      items
                    }
                    
            </div>

            
        </div>
    )
}
export default Image;