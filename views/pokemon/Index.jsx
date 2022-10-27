const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Pokemon Blog Index Page">
                <a href="/user/signup">Signup</a><br/>
                <a href="user/login">Login</a><br/>
                <a href="/">click to return to OG Index Page</a>
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, comment, _id} = pokemon 
                            return(
                                <li key={_id}>
                                    <a href={`/pokemon/${_id}`}><br/>
                                        {name}</a><p> {comment}</p> 

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