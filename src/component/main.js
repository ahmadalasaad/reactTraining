import React, { Component } from 'react';
import Home from './home';
import Destination from './destination';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Crew from './crew';
import Technology from './technology';
class Main extends Component {
    state = {}
    render() {
        return (
            <Router>
                <dev className='main'>
                <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/destination' component={Destination} />
                        <Route path='/crew' component={Crew} />
                        <Route path='/technology' component={Technology} />
                    </Switch>
                </dev>
            </Router>
        );
    }
}

export default Main;