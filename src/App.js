import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  //useeffect is run the code under given condition
  useEffect(() => {
    const token = getTokenFromUrl();
    
    console.log("this is token", token);
    
  }, []);


  return (
    <div className="App">
      <Login />
       
    </div>
  );
}

export default App;
