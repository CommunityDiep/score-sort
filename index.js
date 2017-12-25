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

		sorted[i].push(`${stripped.names[i]} - ${num}`);
		sorted[i].push(stripped.scores[i] / stripped.scores[0]);
	}
	console.log(sorted)
	return players
}

module.exports.sort = sort;
