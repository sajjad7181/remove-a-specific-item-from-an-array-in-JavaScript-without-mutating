const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
  ];
  
  // Remove product from array by ID without mutating the original array
  function removeProduct(id) {
    const clonedProducts = [...products];
    const index = clonedProducts.findIndex((product) => product.id === id);
  
    if (index === -1) return clonedProducts; // If not found, return original clone
  
    clonedProducts.splice(index, 1);
    return clonedProducts;
  }
  
  // Example usage
  console.log(removeProduct(3)); // Product 3 removed
  console.log(products);         // Original array intact
  