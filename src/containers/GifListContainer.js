import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MVO0ERHlkig69jBTWiy4lkl52vb09aOH&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            const gifs = json.data.slice(0, 3)
            this.setState({ gifs })
        })
    }

    render(){
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }
}

export default GifListContainer;