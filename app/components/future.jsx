var React = require('react');

var ChampProfile = require('./shared/champ_profile.jsx');
var LoadingSegment = require('./shared/loading_segment.jsx');
var CHAMPS = require('../../lib/champs.js');

module.exports = React.createClass({
  displayName: 'details',
  uiSegment: function(suggestion_number, champ_data) {
    var champ = champ_data.name;
    var champ_id = champ_data.id;
    var tagline = CHAMPS[champ].tagline;

    return (
      <div className="ui segment">
        <div className="ui dividing header">Suggested Champion</div>
        <div className="ui grid">
          <div className="row">
            <div className="three wide column">
              <ChampProfile champ={champ} tagline={tagline} />
            </div>

            <div className="right floated ten wide column">
              <div className="ui piled segment">
                {champ_data.labels.join(', ')}
              </div>
              <div className="ui piled segment">
                {champ_data.labels.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  render: function() {
    if (!this.props.player_data.name) return(<LoadingSegment />);
    return (
      <div>
        {this.uiSegment('One', this.props.player_data.rec_new_champs[0])}
        {this.uiSegment('Two', this.props.player_data.rec_new_champs[1])}
        {this.uiSegment('Three', this.props.player_data.rec_new_champs[2])}
      </div>
    )
  }
})
