var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'datatype_buttons',
  render: function() {
    return (
      <div className="ui center aligned segment">

        <Link to={'/u/'+this.props.params.player}>
          <button className="big ui inverted blue button">
            Upgrade
          </button>
        </Link>
        <Link to={'/u/'+this.props.params.player+'/future'}>
          <button className="big ui inverted green button">
            Research
          </button>
        </Link>
      </div>
    )
  }
})
