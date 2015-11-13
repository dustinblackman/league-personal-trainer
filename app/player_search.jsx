var React = require('react');
var History = require('react-router').History

var Nav = require('./components/nav.jsx');

module.exports = React.createClass({
  displayName: 'PlayerSearch',
  mixins: [ History ],
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(e) {
    e.preventDefault();
    var summoner_name = $('#summoner_name').val();
    this.history.pushState(null, '/u/'+summoner_name);
  },
  render: function() {
    return (
      <div className="ui container search">
        <Nav/>

        <div className="ui section divider"></div>

        <div className="ui center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content" id="text_header">
                Search up your summoner!
              </div>
            </h2>
            <div className="ui medium form" id="form">
              <div className="ui stacked inverted segment">
                <form>
                  <div className="field">
                    <div className="ui left input">
                      <input type="text" id="summoner_name" placeholder="Search Summoner..." />
                    </div>
                  </div>
                  <button className="ui fluid medium teal submit button" id="submit_button" type='submit' onClick={this.handleChange}>Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
