import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RestCountries from './components/RestCountires';

class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      title: 'Where in the World?',
      dark: true,
    };
    this.handleToggleColor = this.handleToggleColor.bind(this);
  } 

  handleToggleColor() {
    this.setState(prevState => ({
      dark: !prevState.dark
    }));
  }
  
  render() { 
    return ( 
      <React.Fragment>
        <Header title={this.state.title}
        toggleColor={this.handleToggleColor}
        color={this.state.dark}/>
        <div className="main" style={this.state.dark ? {backgroundColor: ' #202C37'} : {backgroundColor: '#f9f9f9'}}>
        <RestCountries color={this.state.dark}/>
        </div>
      </React.Fragment>
       
    );
  }
}
 
export default App;
