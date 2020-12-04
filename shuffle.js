function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

var myCase=[];
if(!localStorage.getItem('TableCase')) {
myCase = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
shuffle(myCase);
// console.log(myCase);
localStorage.setItem("TableCase", JSON.stringify(myCase));}
else{
    myCase=JSON.parse(localStorage.getItem('TableCase'))
    console.log(myCase);
}

var pokemon=[];
if(!localStorage.getItem('pokemon')) {
pokemon = [
	["images/ectoplasma.gif","wow.mp3" ],
	["images/tortank.gif", "wow.mp3"],
	["images/dracaufeu.gif", "wow.mp3"],
	["images/magicarpeSh.gif", "ok.mp3"],
	["images/necrozoma.gif","wow.mp3"],
	["images/sonistrelle.gif","wow.mp3"],
	["images/bulbasaur.gif","wow.mp3"],
	["images/griknot.gif","wow.mp3"],
	["images/jesaisplus.gif","wow.mp3"],
	["images/trioxhydre.gif","wow.mp3"],
	["images/desseliandre.gif","wow.mp3"],
	["images/luxray.gif","wow.mp3"],
	["images/y.gif","wow.mp3"],
	["images/victini.gif","wow.mp3"],
	["images/flambusard.gif","wow.mp3"],
	["images/pyroli.gif","wow.mp3"],
	["images/darkrai.gif","wow.mp3"],
	["images/blizarroi.gif","wow.mp3"],
	["images/locklhass.gif","wow.mp3"],
	["images/phylalli.gif","wow.mp3"],
	["images/galeking.gif","wow.mp3"],
	["images/mimiqui.gif","wow.mp3"],
	["images/pikachu.gif","wow.mp3"],
	["images/felinferno.gif","wow.mp3"],
	["images/artikodin.gif","wow.mp3"],
	["images/rayquaza.gif","wow.mp3"],
	["images/ptera.gif","wow.mp3"],
	["images/250.gif","wow.mp3"],
	["images/sulfura.gif","wow.mp3"],
];
shuffle(pokemon);
// console.log(myCase);
localStorage.setItem("pokemon", JSON.stringify(pokemon));}
else{
    pokemon=JSON.parse(localStorage.getItem('pokemon'))
    console.log(pokemon);
}


// var pokemon = [
// 	["images/ectoplasma.gif","wow.mp3" ],
// 	["images/tortank.gif", "wow.mp3"],
// 	["images/dracaufeu.gif", "wow.mp3"],
// 	["images/magicarpeSh.gif", "ok.mp3"],
// 	["images/necrozoma.gif","wow.mp3"],
// 	["images/sonistrelle.gif","wow.mp3"],
// 	["images/bulbasaur.gif","wow.mp3"],
// 	["images/griknot.gif","wow.mp3"],
// 	["images/jesaisplus.gif","wow.mp3"],
// 	["images/trioxhydre.gif","wow.mp3"],
// 	["images/desseliandre.gif","wow.mp3"],
// 	["images/luxray.gif","wow.mp3"],
// 	["images/y.gif","wow.mp3"],
// 	["images/victini.gif","wow.mp3"],
// 	["images/flambusard.gif","wow.mp3"],
// 	["images/pyroli.gif","wow.mp3"],
// 	["images/darkrai.gif","wow.mp3"],
// 	["images/blizarroi.gif","wow.mp3"],
// 	["images/locklhass.gif","wow.mp3"],
// 	["images/phylalli.gif","wow.mp3"],
// 	["images/galeking.gif","wow.mp3"],
// 	["images/mimiqui.gif","wow.mp3"],
// 	["images/pikachu.gif","wow.mp3"],
// 	["images/felinferno.gif","wow.mp3"],
// 	["images/artikodin.gif","wow.mp3"],
// 	["images/rayquaza.gif","wow.mp3"],
// 	["images/ptera.gif","wow.mp3"],
// 	["images/250.gif","wow.mp3"],
// 	["images/sulfura.gif","wow.mp3"],
// ];
// shuffle(pokemon);
