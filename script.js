let order = [];
let clickedOrder = [];
let score = 0;

/*	0 - green
	1 - red
	2 - yellow
	3 - blue
*/

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
	let colourOrder = Math.floor(Math.random() * 4);

	order[order.length] = colourOrder; // assigns the random number to the next random number

	clickedOrder = [];

	for (let i in order) {
		let elementColour = createColourElement(order[i]); // stores the order of the colour been shown randomly
		lightColour(elementColour, Number(i) + 1);
	}
};

let lightColour = (element, number) => {
	number = number * 500;

	setTimeout(() => {
		element.classList.add('selected'); // adds the opacity class to the element
	}, number - 250);

	setTimeout(() => {
		element.classList.remove('selected'); // removes the opacity class from the element
	}, number);
};

let checkOrder = () => {
	// checks if user clicked the right order
	for (let i in clickedOrder) {
		if (clickedOrder[i] != order[i]) {
			gameOver();
			break;
		}
	}

	if (clickedOrder.length == order.length) {
		alert(`Score: ${score}.\nYou did it! Starting next level...`);
		nextLevel();
	}
};

// check user clicks
let click = (colour) => {
	clickedOrder[clickedOrder.length] = colour;
	createColourElement(colour).classList.add('selected');

	setTimeout(() => {
		createColourElement(colour).classList.remove('selected');
		checkOrder();
	}, 250);
};

// returns the colour
let createColourElement = (colour) => {
	if (colour == 0) {
		return green;
	} else if (colour == 1) {
		return red;
	} else if (colour == 2) {
		return yellow;
	} else if (colour == 3) {
		return blue;
	}
};

// next level
let nextLevel = () => {
	score++;
	shuffleOrder();
};

//game over
let gameOver = () => {
	alert(`Score: ${score}.\nGame Over!\nClick OK to try again.`);
	order = [];
	clickedOrder = [];
	playGame();
};

// new game
let playGame = () => {
	alert(`Welcome to the GeniusColour Memory Game! Starting new game...`);
	score = 0;
	nextLevel();
};

// colour click events
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();