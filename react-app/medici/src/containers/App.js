import React ,{Component} from 'react';
import CardList from '../components/CardList';
import {medici} from '../components/medici';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';


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
                <ErrorBoundry>
                    <CardList  medici={filterMedici}/>
                </ErrorBoundry>
            </div>
            
        );
    }
    
}

export default App;