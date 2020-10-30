import React, {Component} from 'react';

export default class GifSearch extends Component{

    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit= (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        this.props.handleSubmit(this.state.text)
    }

    render() {
        return(
            <div>
            <form onSubmit = {e => this.onSubmit(e)}>
            <input type='text' value={this.state.text} onChange={(e) => this.handleChange(e)} />
            <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }

}