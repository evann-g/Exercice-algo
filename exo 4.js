// Calcule le total des scores d'un utilisateur au-dessus d'un seuil donné
function calculerTotalScores(utilisateur, seuil) {
  return utilisateur.s
    .filter(score => score >= seuil)
    .reduce((total, score) => total + score, 0);
}

// Trie une liste d'utilisateurs par leur total de scores décroissant
function trierParTotal(scoresTotaux) {
  return scoresTotaux.sort((a, b) => b.total - a.total);
}

// Fonction principale : trouve l'utilisateur avec le plus haut total de scores valides
function trouverUtilisateurTop(utilisateurs, seuil) {
  const scoresTotaux = [];

  for (const utilisateur of utilisateurs) {
    const total = calculerTotalScores(utilisateur, seuil);
    if (total > 0) {
      scoresTotaux.push({ nom: utilisateur.n, total });
    }
  }

  const utilisateursTries = trierParTotal(scoresTotaux);
  const topUtilisateur = utilisateursTries[0] ? utilisateursTries[0].nom : null;

  console.log("Utilisateur avec le plus haut total :", topUtilisateur);
  return topUtilisateur;
}

// Exemple d’appel
trouverUtilisateurTop([
  { n: "alice", s: [10, 20, 5, 40] },
  { n: "bob", s: [5, 5, 5, 5] },
  { n: "charlie", s: [50, 10, 30] },
], 10);
