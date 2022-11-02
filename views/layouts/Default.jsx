const React = require('react')

class Default extends React.Component {
    render(){
        const {pokemon, title} = this.props 
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    
                    <nav>
                        <span>
                            <a id="signup" href="/user/signup">Signup</a>
                            <a id="login" href="user/login">Login</a>
                            <a id="logout" href="/user/logout">Logout</a>
                        </span>
                        
                        <a href="/pokemon">Home Page</a><br/>
                        <a href="/pokemon/new">Create New Blog Post</a><br/>
                        { pokemon? <a href={`/pokemon/${pokemon._id}/edit`}> {pokemon.name} Edit Page</a> : ''}<br/>
                        { pokemon? <a href={`/pokemon/${pokemon._id}`}>{pokemon.name} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}

                </body>
            </html>
        )
    }
}

module.exports = Default 