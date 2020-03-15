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
function destructivelyRemoveFirstKitten (name) {

  return kittens.shift()
}
function apendKitten (name){
  let kitties =  [...kittens, name]
  return kitties
}

// function(){}
// function(){}
// function(){}
