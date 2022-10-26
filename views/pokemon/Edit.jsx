const React = require('react');
const Default = require('../layouts/Default.jsx');

class Edit extends React.Component {
    render(){
        const {name, _id, comment} = this.props.pokemon 
        return(
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
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

module.exports = Edit 