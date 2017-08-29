/**
 * http://usejsdoc.org/
 */


function Superhero(superheroname){
    this.superheroname = superheroname;
    this.altid = '';
    this.livesincity = '';
    this.superpowers = [];
}
function MarvelSuperhero(){
    this.isavenger = false;
}
function DCSuperhero(){
    this.isjusticeleaguehero = false;
}
MarvelSuperhero.prototype = new Superhero();
DCSuperhero.prototype = new Superhero();
var superman = new DCSuperhero('superman');
superman.isjusticeleaguehero = true;
var spiderman = new MarvelSuperhero('spiderman');
//All the properties of superman object
for(var key in superman){
    console.log(key);
}
//only the “own” properties of spiderman object
console.log(Object.keys(spiderman));

