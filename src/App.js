import React, { Component } from 'react';
import Header from './component/header';
import Main from './component/main';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='app'>
        <Header />
        <Main />
      </div>
    );
  }
}
 
export default App;