import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';

// Spotify is our major object to use spotifyWebApi throughout the project
const spotify = new SpotifyWebApi(); 

function App() {
  const [token, setToken] = useState(null);


  //useeffect is run the code under given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      //this is the secret key to move and control back and forth between react-project and spotify-API
      spotify.setAccessToken(_token);

      //to access user from spotify-webAPI
      spotify.getMe().then(user => {
        console.log('user:', user);
      });
    }

    console.log("this is token", token);
    
  }, []);


  return (
    <div className="App">
      {
        token ? (
          <Player />
          //<h1>this to show i m logged in</h1>
        ) : (
          <Login />
        )
      }
     
       
    </div>
  );
}

export default App;
