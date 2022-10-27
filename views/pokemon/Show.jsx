const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render(){
        const {name, comment, favePoke, image, reply, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
            <Default title={`${capName}'s Post`} pokemon={this.props.pokemon}>
                <h4 id='commenter'>Commenter: {capName}</h4>
                <h4 id='post'>{comment}</h4>
                <h4 id='favePokemon'>{capName}'s favorite Pokemon is: {favePoke}</h4>
                <img src={image} alt="" />

            </Default>
        )
    }
}

module.exports = Show 