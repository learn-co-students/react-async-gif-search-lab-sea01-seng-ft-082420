import React, {Component} from 'react';

class GifList extends Component{
    render(){
        return (
            <ul style={{float: 'left'}}>
                {this.props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.slug}></img></li>)}
            </ul>
        )
    }
}

export default GifList