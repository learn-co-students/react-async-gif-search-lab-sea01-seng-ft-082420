import React, { Component } from 'react';

class GifSearch extends Component {
    
    state = {
        search: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label name="search" type="text">Search:</label>
                <input onChange={(e) => this.setState({search: e.target.value})} type="text" value={this.state.search}/>
                <input type="submit"></input>
            </form>
        )
    }
    
}

export default GifSearch