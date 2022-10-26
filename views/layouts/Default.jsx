const React = require('react');

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
                        <a href="/pokemon">Home Page for Pokemon Blog</a><br/>
                        <a href="/pokemon/new">Add New Comment</a><br/>
                        { pokemon? <a href={`/pokemon/${pokemon_id}/edit`}> {pokemon.name} Edit Page</a> : '' }<br/>
                        { pokemon? <a href={`/pokemon/${pokemon_id}`}>{pokemon.name} Show Page</a> : '' }
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
};

module.exports = Default