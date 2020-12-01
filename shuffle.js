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
	["images/ectoplasma.gif",],
	["images/tortank.gif", ],
	["Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful.", "Norman Vincent Peale"],
	["Blessed is the season which engages the whole world in a conspiracy of love.", "Hamilton Wright Mabie"],
	["A lovely thing about Christmas is that it's compulsory, like a thunderstorm, and we all go through it together.", "Garrison Keillor"],
	["Christmas is a necessity. There has to be at least one day of the year to remind us that we're here for something else besides ourselves.", "Eric Sevareid"],
	["Christmas magic is silent. You don't hear it --- you feel it, you know it, you believe it.", "Kevin Alan Milne"],
	["Never worry about the size of your Christmas tree. In the eyes of children, they are all thirty feet tall.", "Larry Wilde"],
	["Peace on Earth will come to stay, when we live Christmas every day.", "Helen Steiner Rice"],
	["What kind of Christmas present would Jesus ask Santa for?", "Salman Rushdie"],
	["Unless we make Christmas an occasion to share our blessings, all the snow in Alaska won't make it white.", "Bing Crosby"],
	["Gifts of time and love are surely the basic ingredients of a truly merry Christmas.", "Peg Bracken"],
	["The real Santa Claus is at the mall.", "Lemony Snicket"],
	["What if, doesn't come from a store. What if Christmas... perhaps... means a little bit more!", "Dr. Seuss"],
	["It was often in small moments that significant things were revealed.", "Lisa Kleypas"],
	["I wish we could put up some of the Christmas spirit in jars and open a jar of it every month.", "Harlan Miller"],
	["Christmas is not an external event at all, but a piece of one's home that one carries in one's heart.", "Freya Stark"],
	["Christmas, my child, is love in action. Every time we love, every time we give, it's Christmas.", "Dale Evans Rogers"],
	["Christmas is the keeping-place for memories of our innocence.", "Joan Mills"],
	["One can never receive enough love, nor, can they give enough. Love is the one thing we can never have enough of, nor, give too much.", "Caedem Marquez"],
	["Do give books for Christmas. They're never fattening, seldom sinful, and permanently personal.", "Lenore Hershey"],
	["Christmas works like glue, it keeps us all sticking together.", "Rosie Thomas"],
	["Christmas is a bridge. We need bridges as the river of time flows past. Today's Christmas should mean creating happy hours for tomorrow and reliving those of yesterday.", "Gladys Taber"],
	["MERRY CHRISTMAS", "hongkiat.com"]
];
shuffle(messages);
