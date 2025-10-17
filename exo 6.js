function calculateAverage(scores) {
  if (!Array.isArray(scores) || scores.length === 0) return null;
  const total = scores.reduce((acc, val) => acc + val, 0);
  return total / scores.length;
}

function evaluate(players) {
  const actifs = players
    .filter(p => p.isActive && Array.isArray(p.levelScores) && p.levelScores.length > 0)
    .map(p => ({
      name: p.name,
      avg: calculateAverage(p.levelScores)
    }));

  actifs.sort((a, b) => b.avg - a.avg);

  actifs.forEach((p, i) => p.rank = i + 1);


  return players.map(p => {
    const found = actifs.find(a => a.name === p.name);
    return {
      name: p.name,
      active: p.isActive,
      avg: found ? found.avg : null,
      rank: found ? found.rank : null
    };
  });
}

const players = [
  { name: "Alice", isActive: true, levelScores: [50, 60, 80] },
  { name: "Bob", isActive: false, levelScores: [90, 95, 100] },
  { name: "Charlie", isActive: true, levelScores: [100] },
  { name: "Dylan", isActive: true, levelScores: [] },
];

console.log(evaluate(players));
