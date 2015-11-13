var React = require('react');
var R = require('ramda');

var LoadingSegment = require('./shared/loading_segment.jsx');

module.exports = React.createClass({
  displayName: 'overview',
  uiChamp: function(stat_type, champ_data) {
    var kda = ((champ_data.kills + champ_data.assists) / champ_data.deaths).toFixed(2);
    var winrate = ((champ_data.wins / champ_data.games) * 100).toFixed(0);

    return (
      <div className="column">
        <div className="overview_text">
          <img className="ui small circular image" src={'https://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/'+champ_data.image} />

          <b>{champ_data.name}</b><br />
          <i>{stat_type}</i><br />
          <div className="ui tiny orange inverted statistic">
            <div className="value">
              <i class="plane icon"></i>{kda}
            </div>
            <div className="label">
              KDA
            </div>
          </div>
          <div className="ui tiny yellow inverted statistic">
            <div className="value">
              {winrate}%
            </div>
            <div className="label">
              Winrate
            </div>
          </div>
        </div>
      </div>
    )
  },
  render: function() {
    if (!this.props.player_data.name) return (<LoadingSegment />)
    return (
      <div className="ui inverted segment">
        <div className="ui dividing header">Overview</div>

        <div className="ui three column centered grid">
          <div className="five column row">
            {this.uiChamp('Most Practiced', this.props.player_data.top_champs.most_practiced)}
            {this.uiChamp('Best Performance', this.props.player_data.top_champs.best_performance)}
            {this.uiChamp('2nd Best Performance', this.props.player_data.top_champs.second_best_performance)}
          </div>
        </div>
      </div>
    )
  }
})
