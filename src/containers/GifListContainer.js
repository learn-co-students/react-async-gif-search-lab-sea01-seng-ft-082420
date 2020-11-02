import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    // apiKey =  OuGasTmrvWCD3F2vi5Z55PzilKzDXk5z
    // https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=${apiKey}&rating=g

    state = {
        gifs: [],
        querySearch: 'dolphin'
    }

    componentDidMount() {
        const apiKey = 'OuGasTmrvWCD3F2vi5Z55PzilKzDXk5z'
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.querySearch}&api_key=${apiKey}&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(gif => {
            this.setState({
                gifs: gif.data
            })
        })
    }

    handleSubmit = (e) => {
        const apiKey = 'OuGasTmrvWCD3F2vi5Z55PzilKzDXk5z'
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e}&api_key=${apiKey}&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(gif => {
            this.setState({
                gifs: gif.data
            })
        })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                {this.state.gifs.map(gif => <GifList gif={gif.images.original.url} />)}
            </div>
        )
    }
}