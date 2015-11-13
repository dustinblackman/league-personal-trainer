var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'datatype_buttons',
  render: function() {
    var blue_button = 'big ui blue button'
    var green_button = 'big ui green button'

    if (window.location.pathname.indexOf('learn') > -1) {
      blue_button += ' inverted';
    } else {
      green_button += ' inverted';
    }

    return (
      <div className="ui center aligned inverted segment">

        <Link to={'/u/'+this.props.params.player}>
          <button className={blue_button}>
            Improve
          </button>
        </Link>
        <Link to={'/u/'+this.props.params.player+'/learn'}>
          <button className={green_button}>
            Learn
          </button>
        </Link>
      </div>
    )
  }
})
