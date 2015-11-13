var React = require('react');
var R = require('ramda');

module.exports = React.createClass({
  displayName: 'rec_champs',
  uiChamps: function() {
    var data = R.map(function(champ_data) {
      var kda = ((champ_data.kills + champ_data.assists) / champ_data.deaths).toFixed(2);
      var winrate = ((champ_data.wins / champ_data.games) * 100).toFixed(0);

      return (
        <div className="column" key={champ_data.name}>
          <div className="overview_text">
            <img className="ui small rounded image" src={'https://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/'+champ_data.image} />

            <b>{champ_data.name}</b><br />
            <i>{champ_data.label}</i><br />
            KDA: <b>{kda}</b><br />
            Games: <b>{champ_data.games}</b>
          </div>
        </div>
      )
    }, this.props.player_data.rec_champs)

    return (data)
  },
  render: function() {
    if (!this.props.player_data.name) return (<div></div>)

    return (
      <div className="ui segment">
        <div className="ui dividing header">Recommendations</div>

        <div className="ui three column centered grid">
          <div className="five column row">
            {this.uiChamps()}
          </div>
        </div>
      </div>
    )
  }
})
