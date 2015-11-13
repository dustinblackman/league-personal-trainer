var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var history = require('../lib/create_history');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Main = require('./main.jsx');
var PlayerSearch = require('./player_search.jsx');

// var store = function(state, action) {
//   if (!state) state = 'stats';
//   return state;
// }

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={PlayerSearch} />
    <Route path='/u/:player' component={Main}>
      <Route path='/u/:player/learn' />
      <Route path='/u/:player/details/:champ' />
    </Route>
  </Router>,
  document.getElementById('main_view')
);
