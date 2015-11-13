var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'loading_segment',
  render: function() {
    return (
      <div className="ui container">
        <div className="ui loading inverted segment">
          <p></p>
          <p></p>
        </div>
      </div>
    )
  }
})
