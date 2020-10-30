import React, {Component} from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

export default class GifListContainer extends Component{

    state = {
        gifs: [],
        query: 'dolfin'
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=4XNsJHRfdGjOhocMWHnTDG9vlIHBRBua&rating=g&limit=3`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifs
            })
        })
    }

    handleSubmit = (e) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e}&api_key=4XNsJHRfdGjOhocMWHnTDG9vlIHBRBua&rating=g&limit=3`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifs
            })
        })
        // let query = e.target.value 
    }


    render() {
        console.log(this.state.gifs)
        return(
            <div>
                <GifList gifs ={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

}

// api key: 4XNsJHRfdGjOhocMWHnTDG9vlIHBRBua
// sample search url: https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g