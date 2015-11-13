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

    var facts = this.props.player_data.fun_stats;

    return (
      <div className="ui inverted segment">
        <div className="ui dividing header"><span className="strikethrough">Fun</span> Sad Facts</div>

        <div className="ui five column centered grid">
          <div className="five column row">

            <div className="column">
              <div className="facts_text">
                <img className="ui small rounded image" src={'/images/fighter.jpg'} />

                <div>
                  <b>Top</b>
                </div>
                <div className="ui tiny yellow inverted statistic">
                  <div className="value">
                    {facts.top}
                  </div>
                  <div className="label">
                    Deaths
                  </div>
                </div>
                <div className="facts_per_game">
                  <div className="ui mini yellow inverted statistic">
                    <div className="value">
                      {Math.round(facts.top_per_game)}
                    </div>
                    <div className="label">
                      Per Game
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="facts_text">
                <img className="ui small rounded image" src={'/images/tank.jpg'} />

                <div>
                  <b>Jungle</b>
                </div>
                <div className="ui tiny green inverted statistic">
                  <div className="value">
                    {facts.jungle}
                  </div>
                  <div className="label">
                    CS
                  </div>
                </div>
                <div className="facts_per_game">
                  <div className="ui mini green inverted statistic">
                    <div className="value">
                      {Math.round(facts.jungle_per_game)}
                    </div>
                    <div className="label">
                      Per Game
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="facts_text">
                <img className="ui small rounded image" src={'/images/assassin.jpg'} />

                <div>
                  <b>Middle</b>
                </div>
                <div className="ui tiny blue inverted statistic">
                  <div className="value">
                    {facts.mid}
                  </div>
                  <div className="label">
                    Assists
                  </div>
                </div>
                <div className="facts_per_game">
                  <div className="ui mini blue inverted statistic">
                    <div className="value">
                      {Math.round(facts.mid_per_game)}
                    </div>
                    <div className="label">
                      Per Game
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="facts_text">
                <img className="ui small rounded image" src={'/images/marksman.jpg'} />

                <div>
                  <b>ADC</b>
                </div>
                <div className="ui tiny violet inverted statistic">
                  <div className="value">
                    {facts.adc}
                  </div>
                  <div className="label">
                    Wards Wasted
                  </div>
                </div>
                <div className="facts_per_game">
                  <div className="ui mini violet inverted statistic">
                    <div className="value">
                      {Math.round(facts.adc_per_game)}
                    </div>
                    <div className="label">
                      Per Game
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="facts_text">
                <img className="ui small rounded image" src={'/images/support.jpg'} />

                <div>
                  <b>Support</b>
                </div>
                <div className="ui tiny purple inverted statistic">
                  <div className="value">
                    {facts.support}
                  </div>
                  <div className="label">
                    Kills
                  </div>
                </div>
                <div className="facts_per_game">
                  <div className="ui mini purple inverted statistic">
                    <div className="value">
                      {Math.round(facts.support_per_game)}
                    </div>
                    <div className="label">
                      Per Game
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
