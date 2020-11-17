import React from 'react';

const GifList = ({gifs}) => {
    return (
        <ul>
            {gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
        </ul>
    )
}

export default GifList