/**
 * @jsx React.DOM
 */

var React = require('react');
var MyView = require('./myview.js');

React.renderComponent(
    <MyView />,
    document.getElementById('content')
)