let order = [];
let clickOrder = [];
let score = 0;

/*	0 - green
	1 - red
	2 - yellow
	3 - blue
*/

const green = document.querySelector('blue');
const red = document.querySelector('red');
const yellow = document.querySelector('yellow');
const blue = documento.querySelector('blue');

let shuffleOrder = () => {
	let colourOrder = Math.floor(Math.random() * 4);

	order[order.length] = colourOrder; // assigns the random number to the next random number

	clickOrder = [];

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
