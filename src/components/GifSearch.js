import React, {Component} from 'react';

class GifSearch extends Component{
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    
    handleClick = (event) => {
        event.preventDefault();
        this.props.fetchGifs(this.state.searchTerm)
    }

    render(){
        return (
            <form style={{float: 'left'}}>
                <label>
                    Enter a Search Term:
                </label><br />
                    <input onChange={this.handleChange} type='text' name='searchTerm' value={this.state.searchTerm} /><br />
                <button onClick={this.handleClick}>Find Gifs</button>
            </form>
        )
    }
}

export default GifSearch;