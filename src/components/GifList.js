// const { Component } = require("react")

import React, { Component } from 'react';

export default class GifList extends Component{


    // state = {
    //     gifs: []
    // }

    // rendergifs(){
    //     console.log(this.props)
    // this.props.gifs.map(gif => {
    //     this.setState({
    //         gifs: this.state.gifs.push(<div>{gif.images.original.url}</div>)
    //     })
    //     })
    // }



    render() {
        // console.log(this.props.gifs.data ? )
        return(
            <div>
                {!this.props.gifs.data ? <div></div>: <div>
                    {this.props.gifs.data.map(gif => <img src={gif.images.original.url}></img>)}
                {/* <img src={`${this.props.gifs.data[0].images.original.url}`}></img>
                <img src={`${this.props.gifs.data[1].images.original.url}`}></img>
                <img src={`${this.props.gifs.data[2].images.original.url}`}></img> */}
                </div>}
            </div>
        )
    }

}