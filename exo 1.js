function decompressed(input) {
  let result = [];
  for (let i = 0; i < input.length; i += 2) {
    let char = input[i];
    let count = parseInt(input[i + 1]);
    for (let j = 0; j < count; j++) {
      result.push(char);
    }
  }
  return result.join("");
}
function mostFrequent(z){
  let mf = ""
  let count = 0
  let count2 = 0
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  for (let i = 0 ; i < 25 ; i++){
    let lettre = alphabet[i]
    for (index = 0 ; index < z.length ; index++)
      if (z[index] === lettre){
        count2 += 1
      }
    if (count2 > count) {
      mf = lettre
      count = count2
    }
    count2 = 0
  }
  console.log(mf, "est répété", count , "fois")
}
function uniqueLetters(z){
  let result = new Set(z)
  return result
}



const input = "a3b2c4a1";
let z = decompressed(input)
console.log(z);
console.log(mostFrequent(z));
console.log(uniqueLetters(z));
