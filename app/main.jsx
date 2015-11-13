var React = require('react');

var Card = require('./components/card.jsx');
var DataTypeButtons = require('./components/datatype_buttons.jsx');
var Details = require('./components/details.jsx');
var Overview = require('./components/overview.jsx');
var Nav = require('./components/nav.jsx');
var RecChamps = require('./components/rec_champs.jsx');
var LoadingSegment = require('./components/shared/loading_segment.jsx');
var SadFacts = require('./components/sad_facts.jsx');

var Future = require('./components/future.jsx');

module.exports = React.createClass({
  displayName: 'Main',
  getInitialState: function() {
   return {};
 },
  componentDidMount: function() {
    // $.get('/test', function(result) {
    $.get('http://localhost:3000/search/'+this.props.params.player, function(result) {
      if (this.isMounted()) {
        this.setState(result);
      }
    }.bind(this));
  },
  currentView: function(view) {
    if (view.indexOf('/learn') > -1) {
      return (
        <div>
          <Future player_data={this.state} />
        </div>
      )
    } else {
      return (
        <div>
          <Overview player_data={this.state} />
          <Details params={this.props.params} player_data={this.state} />
          <RecChamps params={this.props.params} player_data={this.state} />
          <SadFacts params={this.props.params} player_data={this.state} />
        </div>
      )
    }
  },
  render: function() {
    var view = this.currentView(window.location.pathname);
    if (!this.state.name) return (
      <div>
        <Nav />
        <div className="ui section divider"></div>
        <LoadingSegment />
      </div>
    )

    return (
      <div className="ui container">
        <Nav/>

        <div className="ui section divider"></div>
        <div className="ui stackable grid">
          <div className="left floated four wide column">
            <Card params={this.props.params} player_data={this.state} />
          </div>
          <div className="right floated twelve wide column">
            <DataTypeButtons params={this.props.params} />
            <div className="ui section divider"></div>
            {view}
          </div>
        </div>
      </div>
    )
  }
})
