const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render(){
        const {name, _id, comment, thoughts, favePoke} = this.props.pokemon 
        return(
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                <h3>Post as:</h3><input type="text" name="name" placeholder='Your name here'></input><br/>
                <h3>Comment:</h3> <input type="text" name="comment" placeholder='What are your thoughts?'></input><br/>
                <h3>Thoughts:</h3> <input type="text" name="thoughts" placeholder='Got other thoughts?'></input><br/>
                <h3>Favorite Pokemon:</h3> <input type="text" name="favePoke" placeholder='Favorite Pokemon?'></input><br/>
                <h3>Image:</h3> <input type="text" name="image" placeholder='insert img url (optional)' /><br/>
                <br/><input type="submit" value="Submit Post"></input>
                </form>
            </Default>
        )
    }
}

module.exports = Edit 