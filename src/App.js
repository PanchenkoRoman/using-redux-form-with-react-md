import React, { Component } from 'react';
import './App.scss';
import ContactPage from './components/formContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactPage />
      </div>
    );
  }
}

export default App;
