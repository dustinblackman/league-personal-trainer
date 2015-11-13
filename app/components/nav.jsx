var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'nav',
  render: function() {
    return (
      <div className="ui stackable container menu">
        <div className="item">
          <img src={'https://ddragon.leagueoflegends.com/cdn/5.21.1/img/mastery/4111.png'} />
        </div>
        <Link to={'/'} className="item">Search</Link>
      </div>
    )
  }
})
