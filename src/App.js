import React, { Component } from 'react';
import PictureList from './PictureList';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';

const options = [
  { value: 'shibes', label: 'Shiba Inus' },
  { value: 'birds', label: 'Birds' },
  { value: 'cats', label: 'Cats' }
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      pictures: [],
      number: 1,
      selectedOption: null
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
        <h1>Animal pictures viewer</h1>
        <Dropdown 
          className='dropdown' 
          controlClassName='dropdownControl' 
          menuClassName='dropdownMenu' 
          arrowClassName='arrowClassName' 
          options={options} 
          onChange={this.onSelect} 
          placeholder="Select an option"/>
        <p className='text'>Number of animals</p>
        <input className='slider' onChange={this.onChange} type='range' min='1' max='30' value={this.state.number}/>
        <p className='inputLabel'>{this.state.number}</p>
        <button className='button' onClick={this.onClick} disabled={!this.state.selectedOption}>Get pictures</button>
        <PictureList pictures={this.state.pictures}/>
      </div>
    );
  }
}

export default App;