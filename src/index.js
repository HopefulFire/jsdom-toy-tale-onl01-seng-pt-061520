
function fetchToys() {
	return fetch(
		'http://localhost:3000/toys'
	).then(function(response) {
		return response.json();
	});
}

function makeCard(toy) {
	const card = document.createElement('div');
	card.class = 'card'
	const name = document.createElement('h2');
	name.innerText = toy.name;
	const image = document.createElement('img');
	image.src = toy.image.src;
	const likes = document.createElement('p');
	likes.innerText = '0';
	const likeButton = document.createElement('button');
	likeButton.class = 'like-btn';
	likeButton.innerText = 'like'
}

function addToysToToyCollection(toyCollection) {
	fetchToys().then(function(toys) {
		for (toy of toys) {
			const card = makeCard(toy);
		}
	});
	return toyCollection;
}

document.addEventListener('DOMContentLoaded', function() {
	const toyCollection = addToysToToyCollection(document.getElementById('toy-collection'));
});