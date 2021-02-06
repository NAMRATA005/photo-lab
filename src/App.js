import React from 'react';
// import './App.css';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Home from './modules/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
