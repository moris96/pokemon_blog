const React = require('react');
const Default = require('../layouts/Default.jsx');

class New extends React.Component {
    render(){
        return(
            <Default title="Create New Blog Post">
                <form method="POST" action="/pokemon">
                <h3>Name:</h3><input type="text" name="name" placeholder='Your name here'></input><br/>
                <h3>Comment:</h3> <input type="text" name="comment" placeholder='Write a comment here'></input><br/>
                <h3>Image:</h3> <input type="text" name="image" placeholder='insert img url' /><br/>
                <br/><input type="submit" value="Submit Pokemon"></input>
                </form>
            </Default>
        )
    }
};

module.exports = New 