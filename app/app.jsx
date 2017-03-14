var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var TodoApp = require('TodoApp');

require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);

{/*<Router history={hashHistory}>*/}
    {/*<Route path="/" component={Main}>*/}
    {/*</Route>*/}
{/*</Router>*/}