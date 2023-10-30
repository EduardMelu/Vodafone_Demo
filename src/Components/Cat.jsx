import React, { useState, useEffect } from 'react';
import { getCat } from '../Services/CatService';

export default function Cat(prop) {
  const forceRerender = prop;
  const [catFact, setCatFact] = useState(null);
  const [items, setItems] = useState([]);
  
    useEffect(() => {
      async function fetchCatFact() {
        const resp = await getCat();
         setCatFact( resp);
      }

      fetchCatFact();
    },[forceRerender]);

    useEffect(() => {
      fetch('https://catfact.ninja/facts')
      .then(response => response.json()).then(data => 
        {
        setItems(data.data);
        });
      },[]);



  return (
    <div>
      <h1>Cat Fact</h1>
      
      {catFact ? (
        <div>
          <p>Fact: {catFact.fact}</p>
          <p>Length: {catFact.length}</p>
        </div>
      ) : (
        <p>Loading cat fact...</p>
      )}
      <div>
      <ul className='list__style'>
        {items.map((item,index) => (
          <li key={index}>{item.fact}</li>
        ))}
        </ul>
      </div>
   
    </div>
  );
};