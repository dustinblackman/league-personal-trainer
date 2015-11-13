var React = require('react');
var R = require('ramda');

module.exports = React.createClass({
  displayName: 'sad_facts',
  render: function() {
    if (!this.props.player_data.fun_stats) return (<div></div>)

    var facts = this.props.player_data.fun_stats;

    return (
      <div className="ui inverted segment">
        <div className="ui dividing header"><span className="strikethrough"><small>Fun</small></span> Sad Facts</div>

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
                    Deaths Fed
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
                    Lane CS
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
