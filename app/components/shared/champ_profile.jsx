var React = require('react');

module.exports = React.createClass({
  displayName: 'champ_profile',
  render: function() {
    var champ = this.props.champ;
    var tagline = this.props.tagline;

    return (
      <div className={this.props.details ? 'details_champ_profile' : 'champ_profile'}>
        <img className="ui small circular image" src={'https://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/'+champ+'.png'} />

        <b>{champ}</b>
        <br />
        <i>{tagline}</i>
      </div>
    )
  }
})
