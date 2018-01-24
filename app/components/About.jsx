var React = require('react');

/* var About = React.createClass({
   render: function() {
       return (
        <h3> About Component</h3>
       )
   } 
}); */
//stateless functional components
//only have a render method
var About = (props) => {
    return (
        <h3> About Component</h3>
       )
};

module.exports = About;