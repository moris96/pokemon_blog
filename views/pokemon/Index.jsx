const React = require('react');
const Pokemon = require('../../models/pokemon');
const Default = require('../layouts/Default.jsx');

class Index extends React.Component {
    render(){
        const {pokemons} = this.props 
        return(
            <Default title="Pokemon Blog Index Page">
                <a href="/">Click to return to OG Page</a>
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, comment, _id} = pokemon
                            return(
                                <li key={_id}>
                                    <a href={`/pokemon/${_id}`}><br/>
                                        {`${name}'s`}</a><h4> comment is: </h4>

                                        <br/>

                                        <form method="POST" action={`/pokemon/${_id}?_method=DELETE`}>
                                            <input type="submit" value={`Delete ${name}`} />
                                        </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
};

module.exports = Index 