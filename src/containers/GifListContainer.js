import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifList: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
            .then(res => res.json())
            .then(gifs => this.setState({
                gifList: [gifs.data[0], gifs.data[1], gifs.data[2]]
            }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.search.value)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.search.value}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(gifResults => this.setState({
                gifList: [gifResults.data[0], gifResults.data[1], gifResults.data[2]]
            }))
    }

    render() {
        console.log(this.state.gifList)
        const { gifList } = this.state
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifs={gifList}/>)
            </div>
        )
    }
}

export default GifListContainer