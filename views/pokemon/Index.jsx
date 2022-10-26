const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Pokemon Index Page">
                <a href="/">click to return to OG Index Page</a>
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, type, _id} = pokemon 
                            return(
                                <li key={_id}>
                                    <a href={`/pokemon/${_id}`}><br/>
                                        {name}</a><p> is a {type} type</p>

                                        <br/>
                                      
                                        <form method="POST" action={`/pokemon/${_id}?_method=DELETE`}>
                                            <input type="submit" value={`Delete ${name}`}/>
                                        </form>
                                </li>
 
                            )
                        })
                    }
                </ul>
                
            </Default>
        )
    }
}

module.exports = Index 