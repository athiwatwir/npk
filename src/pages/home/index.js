import React, { Component } from 'react';

import { findDOMNode} from 'react-dom';

import Content from './content.jsx';
import Partner from './partner.jsx';
import Article from './article_2.jsx';
import GoogleMap from './map.jsx';

import Slider from './slider.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Content />
        <Article />
        <GoogleMap />
        <Partner />
      </div>

    )
  }
}


export default App;
