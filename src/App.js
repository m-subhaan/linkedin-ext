/*global chrome*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  useEffect(() => {
    // chrome.tabs.query({ active: true, currentWindow: true }, function(
    //   tabs
    // ) {
    //   const url = tabs[0].url;
    //   setUrl(url);
    // });

    // Fetch the HTML content of the webpage
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.linkedin.com/jobs/view/3571044526/";
    console.log(url);
    axios
      .get(proxyUrl+ url)
      .then(response => {
        console.log(response.data);
        // Load the HTML content into Cheerio
        const $ = load(response.data);

        // Extract the job title
        const jobTitle = $('h1').text().trim();

        // Extract the job description
        const jobDescription = $('div.description').text().trim();

        // Log the job title and description
        console.log('Job Title:', jobTitle);
        console.log('Job Description:', jobDescription);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
