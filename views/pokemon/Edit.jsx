const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render(){
        const {name, _id, type, weakness} = this.props.pokemon 
        return(
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    <h3>Name:</h3><input type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
                    <h3>Type:</h3> <input type="text" name="type" placeholder='Type of Pokemon Here'></input><br/>
                    <h3>Weaknesses:</h3> <input type="text" name="weakness" placeholder='Weaknesses of Pokemon Here'></input><br/>
                    <h3>Image:</h3> <input type="text" name="image" placeholder='insert img url' /><br/>
                    <br/><input type="submit" value="Submit Pokemon"></input>
                </form>
            </Default>
        )
    }
}

module.exports = Edit 