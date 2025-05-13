const products = [
  { name: "Phone", category: "electronics", price: 600 },
  { name: "Shirt", category: "clothing", price: 40 },
  { name: "Laptop", category: "electronics", price: 1200 },
  { name: "Jeans", category: "clothing", price: 60 }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `<div><strong>${p.name}</strong> - $${p.price} [${p.category}]</div>`;
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const sort = document.getElementById("sortPrice").value;
  let sorted = [...products];

  if (sort === "asc") sorted.sort((a, b) => a.price - b.price);
  else if (sort === "desc") sorted.sort((a, b) => b.price - a.price);

  displayProducts(sorted);
}

displayProducts(products);
