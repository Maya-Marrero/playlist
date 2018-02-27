// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Baby",
	"artist":"Justin Bieber",
	"mp3URL":"https://www.youtube.com/watch?v=kffacxfA7G4",
	"imageURL":"https://vignette.wikia.nocookie.net/justin-bieber/images/4/41/Thumbnail.jpg/revision/latest?cb=20120506173934",
}


console.log(mySong)

var myPlayList = [
	{
		"title":"Never Say Never",
		"artist":"Justin Beiber",
		"mp3URL":"https://www.youtube.com/watch?v=_Z5-P9v3F8w",
		"imageURL":"https://vignette.wikia.nocookie.net/justin-bieber/images/4/41/Thumbnail.jpg/revision/latest?cb=20120506173934",
	},
	{
		"title":"One Time",
		"artist":"Justin Beiber",
		"mp3URL":"https://cdn6.aptoide.com/imgs/1/e/9/1e9b8158b9df5df23875fdb3f52083bd_icon.png?w=256",
		"imageURL":"https://vignette.wikia.nocookie.net/justin-bieber/images/4/41/Thumbnail.jpg/revision/latest?cb=20120506173934",
	},
	{
	"title":"Baby",
	"artist":"Justin Bieber",
	"mp3URL":"https://www.youtube.com/watch?v=kffacxfA7G4",
	"imageURL":"https://vignette.wikia.nocookie.net/justin-bieber/images/4/41/Thumbnail.jpg/revision/latest?cb=20120506173934",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	displayList();
  



});

function displayList(){

for (var i=0; i< myPlayList.length; i= i + 1){
$('.songs').append( "<img src=" + myPlayList[i].imageURL +">");
$('.songs').append("<p>Title: "+ myPlayList[i].title)+"</p>";
$('.songs').append("<p>Artist: "+ myPlayList[i].artist)+"</p>";
$('.songs').append("<p>"+"<a href=" +myPlayList[i].mp3URL+">Play </a>"+ "</p>" );
}

}


function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
