import React from 'react'

class GifSearch extends React.Component{
  
  state ={
    search: "",
  }

  handleSearch = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    this.props.getGifs(this.state.search)
  }

  render() {
    return(
      <div>
        <form>
          <label>Search Word:</label>
          <input onChange={this.handleSearch} type='text' name='search' value={this.state.search}  />
          <button onClick={this.handleClick}> Find Gif </button>
        </form>
      </div>
    )
  }
}

export default GifSearch