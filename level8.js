
const products = [
    { name: "Sport Shoes", category: "Shoes", price: 18000, stock: 12 },
    { name: "Leather Shoes", category: "Shoes", price: 35000, stock: 8 },
    { name: "Sandals", category: "Shoes", price: 15000, stock: 20 },
    { name: "T-shirt", category: "Clothing", price: 10000, stock: 30 },
    { name: "Running Shoes", category: "Shoes", price: 19500, stock: 15 }
];

// Find shoes under 20,000 RWF
const affordableShoes = products.filter(
    product => product.category === "Shoes" && product.price < 20000
);

const shoeNames = affordableShoes.map(product => product.name);

// Find the product with the highest stock
const highestStock = products.reduce((highest, product) =>
    product.stock > highest.stock ? product : highest
);

// Calculate average price
const totalPrice = products.reduce(
    (sum, product) => sum + product.price, 0
);

const averagePrice = totalPrice / products.length;

console.log("Shoes under 20,000 RWF:", shoeNames);
console.log("Highest stock product:", highestStock.name);
console.log("Highest stock quantity:", highestStock.stock);
console.log("Average price:", averagePrice, "RWF");
