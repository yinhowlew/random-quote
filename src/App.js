import React, { Component } from 'react';
import Box from './components/Box/Box.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Box id="quote-box" /> 
      </div>
    );
  }
}

export default App;

// self-note:
// firstly used quotes.js locally
// then change to fetch the JSON but has some issue.
// somehow fixed it but it seems unclean
// UI needs fixing
// removed fetching, add random quotes
// moved BODY css from index css to BOX CSS
// learn about "display"; ways to manipulate spacing: padding, margin,..