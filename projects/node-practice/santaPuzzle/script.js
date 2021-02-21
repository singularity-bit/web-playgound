const fs=require('fs');

function ex(){
    var floor=0;
    var text='';
    var movement=0;
    fs.readFile('./santa.txt',(err,data)=>{
        console.time('inceput');
        if(err)
            throw err;
        
        text=data.toString();
        for(let letter of text){
            movement++;
            if(letter==='('){
                ++floor;
            }
            else if(letter===')'){
                --floor;
            }    
            if(floor===-1){
                console.log('movement:', movement)
                break;
            }
        }
        console.timeEnd('inceput');
        console.log('floor:',floor);
        
    })
}
ex();

