import React ,{Component} from 'react';
import CardList from './CardList';
import {medici} from './medici';
import SearchBox from './SearchBox';


class App extends  Component{

    constructor(){
        super();
        this.state={
            medici:medici,
            searchField:''
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchField: event.target.value})

    }

    render(){

        const filterMedici=this.state.medici.filter(medici=>{
            return medici.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div>   
                <h1>Medici</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList  medici={filterMedici}/>
            </div>
            
        );
    }
    
}

export default App;