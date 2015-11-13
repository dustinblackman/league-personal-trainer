var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'card',
  render: function() {
    var image = 'Leblanc';
    if (this.props.player_data.most_mastered) {
      image = this.props.player_data.most_mastered.image.replace(/.png/g, '')
    }
    return (
      <div className="ui card">
        <div className="image card_image">
          <img src={'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+image+'_0.jpg'} />
        </div>
        <div className="content">
          <a className="header">{this.props.player_data.name}</a>
          <div className="meta">
            <span className="date">Diamond II</span>
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="trophy icon"></i>
            4045 Games
          </a>
        </div>
      </div>
    )
  }
})
