var React = require('react');
var R = require('ramda');

var History = require('react-router').History


module.exports = React.createClass({
  displayName: 'champsearch',
  mixins: [History],
  componentDidMount: function() {
    var self = this;
    $('#champion_search').dropdown({
      onChange: function(text, value, $self) {
        self.history.pushState(null, '/u/'+self.props.params.player+'/details/'+text);
      }
    });
    $('#role_select').dropdown();
  },
  uiChamps: function(champ) {
    return (
      <div className="item search_item" data-value={champ} key={champ}>
        <img className="ui tiny rounded image" src={'https://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/'+champ+'.png'} />{champ}
      </div>
    )
  },
  uiRole: function(role) {
    return (
      <div className="item search_item" data-value={role} key={role}>
        {role}
      </div>
    )
  },
  uiDropdown: function(fn, id, title, entries) {
    var self = this;
    var items = R.map(function(entry) {
      return self[fn](entry);
    }, entries)

    return (
      <div className="four wide column details_search">
        <div className="ui search selection dropdown" id={id}>
          <input type="hidden" name="champion"/>
          <i className="dropdown icon"></i>
          <div className="default text">{title}</div>
            <div className="menu">
              {items}
            </div>
        </div>
      </div>
    )
  },
  render: function() {
    var champs = require('../../../lib/champs');
    var roles = ['Top', 'Middle', 'ADC', 'Support', 'Jungle'];

    return (
      <div className="ui stackable grid">
        <div className="row">
          {this.uiDropdown('uiChamps', 'champion_search', 'Select Champion...', R.keys(champs))}
          {this.uiDropdown('uiRole', 'role_select', 'Select Role...', roles)}
        </div>
      </div>
    )
  }
})
