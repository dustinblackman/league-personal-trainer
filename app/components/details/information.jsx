var React = require('react');
var rd3 = require('react-d3-components');
var d3 = require('d3');
var moment = require('moment');
var History = require('react-router').History

var ChampProfile = require('../shared/champ_profile.jsx');
var CHAMPS = require('../../../lib/champs.js');
var LineChart = rd3.LineChart;

var convertDate = function(time) {
  return moment(time).format('MM-DD');
}

var graph_colors = d3.scale.ordinal().range(["#FFFFFF"]);

module.exports = React.createClass({
  displayName: 'details_information',
  mixins: [ History ],
  genGraph: function() {
    var champ = this.props.params.champ;
    var champ_id = CHAMPS[champ] ? CHAMPS[champ].id : '';
    var timeseries = this.props.player_data.timeseries[champ_id]

    if (!timeseries || !timeseries.length) return (<div></div>)

    var graph_data = [{values: this.props.player_data.timeseries[champ_id]}]
    return (
      <LineChart
        data={graph_data}
        width={500}
        xAxis={{tickFormat: convertDate}}
        height={280}
        margin={{top: 10, bottom: 50, left: 10, right: 10}}
        colorScale={graph_colors}/>
    )
  },
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
            <ChampProfile champ={this.props.params.champ || 'Leblanc'} tagline={tagline || 'The Deceiver'} details='true' />
          </div>

          <div className="ten wide column">
            <div>
              <table className="ui celled padded inverted table">
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
            <br />
            <div className="details_chart">
              {this.genGraph()}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
