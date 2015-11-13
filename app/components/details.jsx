var React = require('react');

var Search = require('./details/search.jsx');
var Information = require('./details/information.jsx');

module.exports = React.createClass({
  displayName: 'details',
  render: function() {
    return (
      <div className="ui inverted segment">
        <div className="ui dividing header">Details</div>
        <Search params={this.props.params} />
        <br /><br />
        <Information params={this.props.params} player_data={this.props.player_data}/>
      </div>
    )
  }
})
