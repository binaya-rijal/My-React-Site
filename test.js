console.log('hello hi bye');

fetch('https://dummyjson.com/products')
  .then(res => res.json()) // Return the result of res.json()
  .then(jsonData => {
    console.log(jsonData.products.map(product => `${product.title}`)); // Corrected arrow function and template literal
  });
