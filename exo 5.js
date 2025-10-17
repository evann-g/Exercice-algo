function filterProducts(products, minPrice, maxPrice, sortBy = "name") {
  // Validation et normalisation des bornes
  let min = Number(minPrice);
  let max = Number(maxPrice);
  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new TypeError("minPrice et maxPrice doivent être des nombres");
  }
  if (min > max) {
    // on échange les bornes si l'utilisateur s'est trompé
    [min, max] = [max, min];
  }

  // Filtrer : prix compris entre min et max inclus (et s'assurer que price est un nombre)
  const filtered = products.filter(product => {
    const price = Number(product && product.price);
    return !Number.isNaN(price) && price >= min && price <= max;
  });

  // Préparer une copie pour ne pas modifier les entrées
  const toSort = filtered.slice(); // copie superficielle

  // Choisir le comparateur selon sortBy
  const comparators = {
    name: (a, b) => {
      const nameA = String(a.name || "");
      const nameB = String(b.name || "");
      return nameA.localeCompare(nameB, undefined, { sensitivity: "base" });
    },
    price: (a, b) => (Number(a.price) - Number(b.price))
  };

  const comparator = comparators[sortBy] || comparators.name;

  // Trier la copie avec le comparateur choisi
  toSort.sort(comparator);

  return toSort;
}
const catalog = [
  { name: "Sneakers", price: 80 },
  { name: "Hat", price: 25 },
  { name: "Watch", price: 120 },
  { name: "Socks", price: 10 }
];

const result = filterProducts(catalog, 20, 100, "price");
console.log("Résultat final :", result);
console.log("Catalogue original :", catalog);
