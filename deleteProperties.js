/**
 * http://usejsdoc.org/
 */
"use strict"; //strict mode
//A simple object
var DCSuperheroes = {
    batman: {
        realname: 'bruce wayne'
    },
    spiderman: {
        realname: 'peter parker'
    },
    superman: {
        realname: 'clark kent'
    }
};
//console.log(DCSuperheroes);
/*Spiderman is not part of DC Universe, we need to delete it. We can delete this 
property in either of the following way */
delete DCSuperheroes.spiderman;
//square bracket way to delete a property
delete DCSuperheroes['spiderman'];//
//console.log(DCSuperheroes);
//But you cannot delete a property that is not configurable. 
"use strict";
var MarvelSuperheroes = Object.create({},{
    batman: {value:"sujith"},
    spiderman: {},
});
//But Batman is not a Marvel character, let us delete it.
//delete MarvelSuperheroes.batman;
//Above code will throw an exception because its being run in strict mode. Therefore it is 
// commented. Even if was not in strict mode you can not delete the batman property of MarvelSuperheroes object.
//While creating the object we used default settings in property descriptor object which means 
//the properties are not configurable at later stage.
console.log(MarvelSuperheroes);
console.log(MarvelSuperheroes.batman);


MarvelSuperheroes = Object.create({},{
    batman: {configurable:true},
    spiderman: {},
});
// Now we will be able to delete 
delete MarvelSuperheroes.batman;
console.log(MarvelSuperheroes);
console.log(MarvelSuperheroes.batman);


