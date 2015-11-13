var React = require('react');
var R = require('ramda');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'card',
  render: function() {
    if (!this.props.player_data.name) {
      return (<div></div>)
    }

    var image = this.props.player_data.most_mastered.image.replace(/.png/g, '');
    var total_champs = R.length(R.keys(this.props.player_data.champion_stats));
    var total_stats = this.props.player_data.total_stats;

    return (
      <div className="ui card">
        <div className="image card_image">
          <img src={'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+image+'_0.jpg'} />
        </div>
        <div className="content">
          <a className="header">{this.props.player_data.name}</a>
          <div className="meta">
            <span className="date">Diamond II</span>
          </div>
        </div>
        <div className="extra content">
            <i className="trophy icon"></i>{total_stats.wins + total_stats.losses} Games (W{total_stats.wins}/L{total_stats.losses})<br/>
            <i className="protect icon"></i>{total_champs} Ranked Champs<br/>
            <i className="crosshairs icon"></i>{total_stats.kills} Kills<br/>
            <i className="bomb icon"></i>{total_stats.deaths} Deaths<br/>
            <i className="thumbs outline up icon"></i>{total_stats.assists} Assists<br/>
            <i className="fire icon"></i>{total_stats.cs} Creeps
        </div>
      </div>
    )
  }
})
