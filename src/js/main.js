// 'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.body;

require('../styles/main.js');

console.log('reactDomRender!');
ReactDOM.render(
  <App givenDate = {"November, 17, 2015"} msg ="Until the festival" afterUnmount = {this.afterUnmount}/>,

  // <App/>,
  rootElement
);
