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
		"mp3URL":"https://www.youtube.com/watch?v=8PTukbWkuZw",
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
$('body').append("<p>Title: " + mySong.title+ "</p>");
$('body').append("<p>Artist: " + mySong.artist + "</p>");
$('body').append( "<a href=" + mySong.mp3URL+">Play </a>");
$('body').append( "<img src=" + mySong.imageURL +">");

$('body').append( myPlayList[0].title);
$('body').append( myPlayList[0].artist);
$('body').append("<a href=" +myPlayList[0].mp3URL+">Play </a>" );
$('body').append( "<img src=" + myPlayList[0].imageURL +">");

$('body').append( myPlayList[1].title);
$('body').append( myPlayList[1].artist);
$('body').append("<a href=" +myPlayList[1].mp3URL+">Play </a>" );
$('body').append( "<img src=" + myPlayList[1].imageURL +">");
  
  $('body').append( myPlayList[2].title);
$('body').append( myPlayList[2].artist);
$('body').append("<a href=" +myPlayList[2].mp3URL+">Play </a>" );
$('body').append( "<img src=" + myPlayList[2].imageURL +">");
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
