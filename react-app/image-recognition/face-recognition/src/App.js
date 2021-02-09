import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Image from './components/Image';
import Clarifai from 'clarifai';

const app=new Clarifai.App({
  apiKey: '20ded08a8ca24281922f6f128ab6041e'
});

class App extends Component {

  constructor(){
    super();
    this.state={
      Input:'',
    }
  }

  onInputChange= (event)=>{
    console.log(event.target.value)
  }
  onSubmit=()=>{
    app.models.predict().then(
      function(response){

      },
      function(err){
        
      }
    )
    
    }
  }

  render(){
    return (
      <div className="container">
        <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <Image />
      </div> 
    );
  }
}

export default App;
