import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Shop />
      </div>
    )
  }
}


export default App