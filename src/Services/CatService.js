export function getCat() {
  return   fetch('https://catfact.ninja/fact')
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.error('Error fetching cat fact:', error);
  });
}