const React = require('react');
const Default = require('../layouts/Default.jsx');

class Show extends React.Component {
    render(){
        const {name, comment, image, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
            <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
                <h4>{capName} is {comment}</h4>
                <img src={image} alt="" />
            </Default>
        )
    }
};

module.exports = Show 