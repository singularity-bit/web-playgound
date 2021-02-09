import React from 'react';
//import {medici} from './medici';
import MediCard from './Card';

const CardList=({medici})=>{

    return (
            <div>
                {
                    medici.map((user,i)=>{
                        return  (
                            <MediCard 
                                key={i} 
                                id={medici[i].id} 
                                name={medici[i].name} 
                                email={medici[i].email}
                            />
                        );
                    })
                }           
            </div>
    );
}
export default CardList;