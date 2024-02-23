function calculateSalesTotals(sales) {
  if (!Array.isArray(sales)) {
    console.log("Error: Please provide an array of sales data.");
  }

  var updatedSales = sales.map((item) => {
    var salePrice = item.original;
    if (item.discount) {
      salePrice = item.original * (1 - item.discount);
    }
    var total = salePrice * item.stock;

    return {
      ...item, 
      sale: salePrice, 
      total: total,
    };
  });

  return updatedSales;
}

const sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 },
];

const updatedSales = calculateSalesTotals(sales);
console.log(updatedSales); 
