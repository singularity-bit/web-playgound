import React, { Component } from 'react';
import './App.css';
import Input from './components/Input box/Input';
import Image from './components/image box/Image';
import Clarifai from 'clarifai';

const app=new Clarifai.App({
  apiKey: '20ded08a8ca24281922f6f128ab6041e'
});

class App extends Component {

  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:[],
    }
  }

  calculateFaceLocation=(data)=>{

    const image=document.getElementById('inputImage');
    const width=Number(image.width);
    const height=Number(image.height);
    
    return{
      leftCol:data.left_col*width,
      topRow:data.top_row*height,
      rightCol:width-(data.right_col*width),
      bottomRow:height-(data.bottom_row*height)
    }
    
  }


  displayFaceBox=(boxi)=>{
   // console.log("boxi:",this.state.box);
    this.setState({
      box:[...this.state.box,boxi]
    })
    
  }
  onInputChange= (event)=>{
    this.setState({input:event.target.value})
  }
  onSubmit=()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
    .then(response=>{
      const  faces=response.outputs[0].data.regions;
      
      faces.map(face=>{
        //console.log(face.region_info.bounding_box)
        this.displayFaceBox(this.calculateFaceLocation(face.region_info.bounding_box))})
      })
    .catch(err=>console.log(err));
  }
  


  render(){
    return (
      <div className="container">
        <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <Image  box={this.state.box} imageUrl={this.state.imageUrl} />
      </div> 
    );
  }
}

export default App;
