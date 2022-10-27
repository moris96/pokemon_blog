const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Blog Post">
            <form method="POST" action="/pokemon">
                <h3>Post as:</h3><input type="text" name="name" placeholder='Your name here'></input><br/>
                <h3>Comment:</h3> <input type="text" name="comment" placeholder='What are your thoughts?'></input><br/>
                <h3>Favorite Pokemon:</h3> <input type="text" name="favePoke" placeholder='Favorite Pokemon?'></input><br/>
                <h3>Image:</h3> <input type="text" name="image" placeholder='insert img url (optional)' /><br/>
                <br/><input type="submit" value="Submit Post"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New