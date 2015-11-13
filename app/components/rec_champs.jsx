var React = require('react');
var R = require('ramda');

module.exports = React.createClass({
  displayName: 'rec_champs',
  uiChamps: function() {
    var data = R.map(function(champ_data) {
      var kda = ((champ_data.kills + champ_data.assists) / champ_data.deaths).toFixed(2);

      var label_class = 'error';
      if (champ_data.label === 'wellplayed') label_class = 'good';

      return (
        <div className="column" key={champ_data.name}>
          <div className="overview_text">
            <img className="ui small rounded image" src={'https://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/'+champ_data.image} />

            <div>
              <b>{champ_data.name}</b>
              <br />
              <span className={label_class}><i>{champ_data.label}</i></span>
            </div>
            <div className="ui tiny inverted teal horizontal statistic">
              <div className="value">
                {kda}
              </div>
              <div className="label">
                KDA
              </div>
            </div>
            <div className="ui tiny inverted purple horizontal statistic">
              <div className="value">
                {champ_data.games}
              </div>
              <div className="label">
                Games
              </div>
            </div>
          </div>
        </div>
      )
    }, this.props.player_data.rec_champs)

    return (data)
  },
  render: function() {
    if (!this.props.player_data.name) return (<div></div>)

    return (
      <div className="ui inverted segment">
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
