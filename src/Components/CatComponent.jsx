import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatComponent.css'

const CatComponent = () => {
  const [catImageUrl, setCatImageUrl] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const imageUrl = response.data[0].url;
      setCatImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  useEffect(() => {
    fetchCatImage()
  }, []); 

  return (
    <div className='catMain'>
      <h3>Cat Generator</h3>
      <button onClick={() => fetchCatImage()}>Click to see new cat</button>
      <div id='catImg'>{catImageUrl && <img src={catImageUrl} alt='Random Cat' />}</div>
    </div>
  );
};

export default CatComponent;
