var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'datatype_buttons',
  render: function() {
    return (
      <div className="ui center aligned inverted segment">

        <Link to={'/u/'+this.props.params.player}>
          <button className="big ui inverted blue button">
            Improve
          </button>
        </Link>
        <Link to={'/u/'+this.props.params.player+'/learn'}>
          <button className="big ui inverted green button">
            Learn
          </button>
        </Link>
      </div>
    )
  }
})
