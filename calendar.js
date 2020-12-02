var myCal = document.getElementById("adventCal");
var currentDate = new Date();



  

function Door(calendar, box,j) {
	
    this.jour = j;
	this.picture = messages[j - 1][0];
	this.music = messages[j - 1][1];
	this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
	this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
	// this.adventMessage = 'Day ' + this.jour + ' of Advent\n\n' + '"' + messages[j - 1][0] + '"\n\n\t' + 'by ' + messages[j - 1][1] + '\n\n';
	this.x = ( 0.04 * calendar.width + ((box- 1) % 4) * (1.1 * this.width) );
	this.y = - ( 0.96 * calendar.height - Math.floor((box - 1) / 4) * (1.1 * this.height) );

	this.content = function() { 
		
		var node = document.createElement("li");
		document.getElementById("adventDoors").appendChild(node);
		node.id = "door" + this.jour;
		node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

		var innerNode = document.createElement("a");
		document.getElementById("door" + this.jour).appendChild(innerNode);
		innerNode.innerHTML = this.jour;
        innerNode.href = "#";
        
		var innerPicture = document.createElement("li");
        document.getElementById("adventDoors").appendChild(innerPicture);
        innerPicture.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";
        innerPicture.innerHTML = "<img class='pepito' src="+this.picture+" width='100%' height='100%'>";
        innerPicture.style.display = "none";
        
        console.log(this.picture);
        

		if( ( currentDate.getMonth() + 1 ) < 12 || currentDate.getDate() < this.jour  ) {
			innerNode.className = "disabled";
			innerNode.onclick = function() {
				return false;
			}
		} else {
			
			innerNode.onclick = function() {
				  
					/*
					** MUSIQUE DE NOël
					*/
				  
					let audioPlayer = document.createElement("audio");

					audioPlayer.src = "wow.mp3";
					audioPlayer.type = 'audio/mpeg';
					audioPlayer.autoplay = true;
					audioPlayer.style = "display:none;";
				  
					document.body.appendChild(audioPlayer);
				  
                innerPicture.style.display = "block";
				return false;
			}
		}	
	};

}
            

(function() {
    console.log(myCase)
    var doors = [];
    var j=0;

	for(var i = 0; i < 24; i++) {
        j=myCase[i]
		doors[i] = new Door(myCal, i + 1, j);
		doors[i].content();

	}

	return doors;
})();