// Multiple arguements
let add = function(a, b, c) {
  return a + b + c;
}
let result = add(10, 1, 5)
console.log(result);


// Default Arguement 
let getScoreText = function(name = 'Powell', score = 0) {
  return 'Name: ' + name + '- Score:' + score 
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Chanllenge 
let getTip = function (total, tipPercent = .2) {
  return total * tipPercent
}
let tip = getTip(100)
console.log(tip)