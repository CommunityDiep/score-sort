const numeral = require('numeral');

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

		let num = numeral(stripped.scores[i]).format('0.[0]a');
		let maxscore = stripped.scores[0] == 0 ? 1 : stripped.scores[0];

		sorted[i].push(`${stripped.names[i]} - ${num}`);
		sorted[i].push(stripped.scores[i] / maxscore);
	}
	return players
}

module.exports.sort = sort;
