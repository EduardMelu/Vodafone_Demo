import React, { useState, useEffect } from 'react';

export default function Cat() {
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
      fetch('https://catfact.ninja/fact')
    .then((response) => response.json())
    .then((data) => {
        setCatFact(data);
    })
    .catch((error) => {
      console.error('Error fetching cat fact:', error);
    });
    }, []);


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
    </div>
  );
};



// useEffect(() => {
//     const cat = getCat();
//     setCatFact(cat);
//   }, []);