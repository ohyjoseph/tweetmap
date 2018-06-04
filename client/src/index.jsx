import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Tables from './components/tables.jsx'
import Map from './components/map.jsx'

class App extends React.Component {

  render() {
    return(
      <div className='App'>
        <h1>Hello, World!</h1>
        <p>Team Twit 4 Lyfe!</p>
        <Map />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
