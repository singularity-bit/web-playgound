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
      imageUrl:''
    }
  }

  onInputChange= (event)=>{
    this.setState({input:event.target.value})
  }
  onSubmit=()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    ).then(
      function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        
      },
      function(err){
        
      }
    )
    
    }


  render(){
    return (
      <div className="container">
        <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <Image imageUrl={this.state.imageUrl} />
      </div> 
    );
  }
}

export default App;
