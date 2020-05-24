const $gallery = document.getElementById('gallery');

const gallery = []

for (let j = 0; j < 6; j++){
	const animals = [
		{name: 'Sorrento', image: 'sorrento.jpg', alt:'Man in Sorrento street'},
		{name: 'Wikki', image: 'dalmation.jpg', alt:'A dalmation sitting'},
		{name: 'Maeve', image: 'dog-chess.jpg', alt:'A dog laying beside a chess set'},
		{name: 'Vince', image: 'camper.jpg', alt:'Man by a camp fire'},
		{name: 'Marc', image: 'man-in-hat.jpg', alt:'Man standing with fall leaves'},
		{name: 'Succulent', image: 'plant.jpg', alt:'Succulent in the forest'}
		]
	gallery.push(`<div class="gallery_card" tabindex="0"><img class="image" src="images/`+`${animals[j].image}" alt="`+`${animals[j].alt}">`+`<div class="overlay"><h4 class="text">${animals[j].name}</h2></div></div>`)
}

$gallery.innerHTML = gallery.join('')

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}