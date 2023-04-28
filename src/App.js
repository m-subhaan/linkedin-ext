/*global chrome*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl] = useState('https://www.google.com');
  useEffect(() => {
    // chrome.tabs.query({ active: true, currentWindow: true }, function(
    //   tabs
    // ) {
    //   const url = tabs[0].url;
    //   setUrl(url);
    // });


  }, []);

  return (
    <div>
      <header className="App-header">
        <p>{url}</p>
      </header>
    </div>
  );
}

export default App;
