// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
// class App extends Component {
    // constructor if using class
    // constructor() {
    //     super()
    //     this.state = {
    //         // robots: robots,
    //         robots: [],
    //         searchfield: ''
    //     }
    //     //console.log('1 - End of constructor');
    // }

    // componentDidMount() { // part of React - no arrow functions
    //     // this.setState({ robots: robots });
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         // .then(users => this.setState({ robots: users }));
    //         .then(users => setRobots(users));
    //     //console.log('2 - End of componentDidMount');
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        // console.log('End of setRobots');
        console.log(count);
    }, [count]) // only run if count changes

    const onSearchChange = (event) => {
        // this.setState({ searchfield: event.target.value });
        // //const filteredRobots = this.state.robots.filter(robot => {
        // //    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // //})
        // //console.log(filteredRobots);
        setSearchfield(event.target.value);
    }

    //const filteredRobots = this.state.robots.filter(robot => {
    const filteredRobots = robots.filter(robot => {
        // return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    ////console.log('3 - prior to render return');
    //// if (this.state.robots.length === 0) { // referring to state of the app - loading bar
    //// if (robots.length === 0) { // referring to state of the app - loading bar
    //if (!robots.length) { // if length != 0 ... referring to state of the app - loading bar
    //    return <h1>Loading...</h1>
    //} else {
    //    return (
    //        <div className='tc'>
    //            <h1 className='f1'>RoboFriends</h1>
    //            <SearchBox searchChange={this.onSearchChange}/>
    //            {/*<CardList robots={this.state.robots}/>*/}
    //            <Scroll>
    //                <CardList robots={filteredRobots}/>
    //            </Scroll>
    //        </div>
    //    );
    //}

    return !robots.length ? // if length != 0 ... referring to state of the app - loading bar
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <button onClick={()=>setCount(count+1)}>click me</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

export default App;
