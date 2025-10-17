const players = ["Alice", "Bob", "Charlie", "David", "Eve"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createMatches(players) {
  const shuffled = shuffle([...players]); 
  const matches = [];
  if (shuffled.length % 2 !== 0) {
    const exempt = shuffled.pop();
    for (let i = 0; i < shuffled.length; i += 2) {
      matches.push([shuffled[i], shuffled[i + 1]]);
    }
    matches.push({ exempt });
  } else {
    for (let i = 0; i < shuffled.length; i += 2) {
      matches.push([shuffled[i], shuffled[i + 1]]);
    }
  }

  return matches;
}

console.log(createMatches(players));