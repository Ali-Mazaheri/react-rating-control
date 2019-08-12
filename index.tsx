import React, { Component } from 'react';
import { render } from 'react-dom';
import {Rating} from './Rating/Rating'
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Rating starCount={10}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
