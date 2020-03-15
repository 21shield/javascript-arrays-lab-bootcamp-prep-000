var kittens = ['Milo','Otis','Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten () {
  kittens.shift
  return kittens
}
function apendKitten (name){
  return [...kittens, name]
}

function(){}
function(){}
function(){}
