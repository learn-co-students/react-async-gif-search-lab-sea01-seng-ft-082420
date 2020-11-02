import React from 'react'
import GifListContainer from '../containers/GifListContainer'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 
// apiKey =  OuGasTmrvWCD3F2vi5Z55PzilKzDXk5z
// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=${apiKey}&rating=g

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
