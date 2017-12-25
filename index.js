const numeral = require('numeral');

// players would be an object of player objects (key is ID, value is an object containing score and username)
function sort (players) {
	let sorted = [];
	let stripped = {
		scores: [],
		names: []
	};

	for (var i in Object.values(players)) {
		stripped.names.push(Object.values(players)[i].name);
		stripped.scores.push(Object.values(players)[i].score);
		sorted.push([]);

		stripped.scores = stripped.scores.sort((a, b) => a - b).reverse();
		stripped.names = stripped.names.sort().reverse();

		let num = numeral(stripped.scores[i]).format('0.[0]a');
		let maxscore = stripped.scores[0] == 0 ? 1 : stripped.scores[0];

		sorted[i].push(`${stripped.names[i]} - ${num}`);
		sorted[i].push(stripped.scores[i] / maxscore);
	}
	return sorted;
}

module.exports.sort = sort;

console.log(sort({
	'hi': {
		score: 1250,
		name: 'Hello 1'
	},
	'hi2': {
		score: 2500,
		name: 'Hello 2'
	}
}))
