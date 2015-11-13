var React = require('react');
var R = require('ramda');

var ChampProfile = require('./shared/champ_profile.jsx');
var LoadingSegment = require('./shared/loading_segment.jsx');
var CHAMPS = require('../../lib/champs.js');

module.exports = React.createClass({
  displayName: 'details',
  uiLabel: function(labels) {
    return R.map(function(label) {
      return (<div className="ui stacked inverted grey segment">{label}</div>)
    }, labels)
  },
  uiSegment: function(suggestion_number, champ_data) {
    var champ = champ_data.image.replace(/.png/g, '');
    var champ_id = champ_data.id;
    var tagline = CHAMPS[champ].tagline;

    return (
      <div className="ui inverted segment">
        <div className="ui dividing header">Suggested Champion</div>
        <div className="ui grid">
          <div className="row">
            <div className="three wide column">
              <ChampProfile champ={champ} tagline={tagline} />
            </div>

            <div className="right floated ten wide column">
              {this.uiLabel(champ_data.labels)}
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
