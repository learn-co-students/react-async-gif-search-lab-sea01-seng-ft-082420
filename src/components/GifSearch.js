import React, {Component} from 'react'

class GifSearch extends Component {

    state = {
        input: null
    }

    inputState = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        const { handleSubmit } = this.props
        console.log(this.state.input)
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="search" onChange={this.inputState}></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default GifSearch