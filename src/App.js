import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots';
import './App.css';

//const App = () => {
class App extends Component {
    constructor() {
        super()
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: ''
        }
        //console.log('1 - End of constructor');
    }

    componentDidMount() { // part of React - no arrow functions
        // this.setState({ robots: robots });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        //console.log('2 - End of componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        //const filteredRobots = this.state.robots.filter(robot => {
        //    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        //})
        //console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        //console.log('3 - prior to render return');
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/*<CardList robots={this.state.robots}/>*/}
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;
