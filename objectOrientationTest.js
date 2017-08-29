/**
 * http://usejsdoc.org/
 */
var superheroes = {
    batman: {
        realname: 'bruce wayne',
        livesin: 'gotham city'
    },
    superman: {
        realname: 'clark kent',
        livesin: 'metropolis'
    },
    spiderman: {
        realname: 'peter parker',
        livesin: 'new york'
    }

};
console.log(Object.keys(superheroes));
console.log(Object.keys(superheroes.spiderman));
for (var mainKey in superheroes){
	console.log("mainKey"+":"+mainKey);
	var insideObj = superheroes[mainKey];
	
	for ( var innerKey in insideObj) {
		console.log("\tinnerKey"+":"+innerKey+",value:"+insideObj[innerKey]);
		
	}
}


