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

var myCase = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
shuffle(myCase);

var messages = [
	["images/ectoplasma.gif", ],
	["images/tortank.gif", ],
	["images/dracaufeu.gif", ],
	["images/magicarpeSh.gif"],
	["images/necrozoma.gif"],
	["images/sonistrelle.gif"],
	["images/bulbasaur.gif"],
	["images/griknot.gif"],
	["images/jesaisplus.gif"],
	["images/trioxhydre.gif"],
	["images/desseliandre.gif"],
	["images/luxray.gif"],
	["images/y.gif"],
	["images/victini.gif"],
	["images/flambusard.gif"],
	["images/pyroli.gif"],
	["images/darkrai.gif"],
	["images/blizarroi.gif"],
	["images/locklhass.gif"],
	["images/phylalli.gif"],
	["images/galeking.gif"],
	["images/mimiqui.gif"],
	["images/pikachu.gif"],
	["images/felinferno.gif"],
	["images/artikodin.gif"],
	["images/rayquaza.gif"],
	["images/ptera.gif"],
	["images/250.gif"],
	["images/sulfura.gif"],
];
shuffle(messages);
