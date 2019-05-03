import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Root.css';

import Main from '../Main/Main';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path='/' component={ Main }/>
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
