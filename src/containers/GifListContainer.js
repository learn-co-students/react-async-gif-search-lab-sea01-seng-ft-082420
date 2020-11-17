import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchGifs = (search) => {
        fetch (`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(results => {
            this.setState({
            gifs: results.data.map(gif => ({url: gif.images.original.url}))
        })
    })
    }

   componentDidMount() {
       this.fetchGifs()
   }

    render() {
        return (
            <div>
                < GifSearch fetchGifs={this.fetchGifs}/>
                < GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer