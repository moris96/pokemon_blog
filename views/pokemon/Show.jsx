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

                <h4 id="reply">Replies: {reply} </h4>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    <h3 id="replies">Reply:</h3> <input id="replyForm" type="text" name="reply" placeholder='reply to this post'></input><br/>
                    <input id="submitReply" type="submit" value={`Reply to ${name}`}/>
                </form>

            </Default>
        )
    }
}

module.exports = Show 