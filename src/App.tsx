import React, { useState } from 'react';
import { InputChangeEventHandler } from './utils/types'
import { postToAPI } from './utils/api';
import './App.css';

const App = () => {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const getShortUrlFromAPI = async () => {
    const data = await postToAPI(longUrl)
    setShortUrl(data.link)
    console.log(data)
  }

  const handleChange = (event: InputChangeEventHandler) => {
    setLongUrl(event.target.value)
  }

  return (
    <div>
      <h1>Link Shortener</h1>
      <input type="url" className="originalLink" onChange={handleChange}/>
      <div className="shortLink">New Link: {shortUrl}</div>
      <button onClick={getShortUrlFromAPI}>Shorten URL</button>
    </div>
  );
}

export default App;