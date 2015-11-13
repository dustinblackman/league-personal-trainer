var React = require('react');
var History = require('react-router').History

var ChampProfile = require('../shared/champ_profile.jsx');
var CHAMPS = require('../../../lib/champs.js');

module.exports = React.createClass({
  displayName: 'details_information',
  mixins: [ History ],
  render: function() {
    var kda = 0;
    var winrate = 0;
    var play_rate = 0;

    var champ = this.props.params.champ;
    var champ_id = CHAMPS[champ] ? CHAMPS[champ].id : '';
    var tagline = CHAMPS[champ] ? CHAMPS[champ].tagline : '';

    if (this.props.player_data && this.props.player_data.champion_stats) {
      var champ_data = this.props.player_data.champion_stats[champ_id];

      if (champ_data) {
        kda = ((champ_data.kills + champ_data.assists) / champ_data.deaths).toFixed(2);
        winrate = ((champ_data.wins / champ_data.games) * 100).toFixed(0)
        play_rate = (champ_data.ranked_play_ratio * 100).toFixed(0);
      }
    }

    return (
      <div className="ui grid details_information">
        <div className="three column row">
          <div className="column">
            <ChampProfile champ={this.props.params.champ || 'Leblanc'} tagline={tagline || 'The Deceiver'} />
          </div>

          <div className="ten wide column">
            <div>
              <table className="ui celled padded table">
                <thead>
                  <tr>
                    <th>KDA</th>
                    <th>Winrate</th>
                    <th>Play Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{kda}</th>
                    <th>{winrate}%</th>
                    <th>{play_rate}%</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
