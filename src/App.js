import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { findDOMNode} from 'react-dom';

//mport './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Footer />
      </div>

    )
  }
}


export default hot(module)(App);
