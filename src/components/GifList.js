import React from 'react'

function GifList( {gifs} ) {

    return(
        <div>
            {console.log(gifs)}
            <ul>
                {gifs.map(gif => <img src={gif.images.original.url} />)}
            </ul>
        </div>
    )
}

export default GifList