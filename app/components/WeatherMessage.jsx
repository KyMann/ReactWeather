var React = require('react');

var WeatherMessage = React.createClass({
    //renders a string with temp and location
    render: function() {
        var {temp, location} = this.props;
        
        return (
            <div>
                <p>It is {temp} in {location}</p>
            </div>
        )
    }
});

module.exports = WeatherMessage;