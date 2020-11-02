import React, { Component } from 'react'

export default class GifList extends Component {

    render() {
        return (
            <ul>
                <li>
                    <img src={this.props.gif}/>
                </li>
            </ul>
        )
    }
}