function analyserAchats(achats, seuilPrix) {
  const achatsFiltres = achats.filter(achat => achat.p > seuilPrix);

  if (achatsFiltres.length === 0) {
    console.log("Aucun produit ne dépasse le seuil.");
    return;
  }

  const moyennePrix =
    achatsFiltres.reduce((total, achat) => total + achat.p, 0) /
    achatsFiltres.length;

  const compteCategories = {};
  for (const achat of achatsFiltres) {
    compteCategories[achat.c] = (compteCategories[achat.c] || 0) + 1;
  }

  const categorieTop = Object.entries(compteCategories)
    .sort((a, b) => b[1] - a[1])[0][0];

  console.log("Prix moyen :", moyennePrix.toFixed(2));
  console.log("Catégorie la plus fréquente :", categorieTop);
}

// ✅ Appel correct
analyserAchats([
  { p: 50, c: "tech" },
  { p: 120, c: "clothes" },
  { p: 300, c: "tech" },
  { p: 90, c: "home" },
  { p: 500, c: "tech" },
], 100);
