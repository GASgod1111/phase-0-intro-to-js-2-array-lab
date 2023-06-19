// Assuming the initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push('Rapha');
}

function destructivelyPrependCat(name) {
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
  cats.pop('Garfield');
}

function destructivelyRemoveFirstCat() {
  cats.shift('Milo');
}
function appendCat(name) {
  return cats.concat(['Broom']);
}

function prependCat(name) {
  return [].concat(cats);
}

