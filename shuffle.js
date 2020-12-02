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
	["images/ectoplasma.gif", "Ectoplasma",],
	["images/tortank.gif", ],
	["images/dracaufeu.gif", ],
	["images/magicarpeSh.gif"],
	["images/tauros.gif"],
	["images/mew.gif"],
	["images/bulbasaur.gif"],
	["images/griknot.gif"],
	["images/jesaisplus.gif"],
	["images/trioxhydre.gif"],
	["images/desseliandre.gif"],
	["images/luxray.gif"],
	["images/y.gif"],
	["images/Nidoking.gif"],
	["images/flambusard.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
	["images/magicarpeSh.gif"],
];
shuffle(messages);
