import React, { Component } from 'react';
import PictureList from './PictureList';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import logo from './logo.svg';
import './App.css';

const options = [
  { value: 'shibes', label: 'Shiba Inus' },
  { value: 'birds', label: 'Birds' },
  { value: 'cats', label: 'Cats' }
];
const defaultOption = options[0];

class App extends Component {
  constructor() {
    super()
    this.state = {
      pictures: [],
      number: 1,
      selectedOption: defaultOption
    }
  }

  onClick = (event) => {
    fetch(`http://shibe.online/api/${this.state.selectedOption}?count=${this.state.number}`)
      .then(response=> response.json())
      .then(pictures => {this.setState({ pictures })});
  }

  onChange = (event) => {
    this.setState({ number: event.target.value });
  }

  onSelect = (event) => {
    this.setState({ selectedOption: event.value });
  
  }

  render () {
    return (
      <div className="App">
        <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option"/>
        <input onChange={this.onChange} type='range' min='1' max='30' value={this.state.number}/>
        <p>{this.state.number}</p>
        <button onClick={this.onClick}>Get pictures</button>
        <PictureList pictures={this.state.pictures}/>
      </div>
    );
  }
}

export default App;