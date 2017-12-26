const numeral = require('numeral');

const sort = (players, depth = 1) => {
	let arr = Object.values(players).sort((a, b) => b.score - a.score);
	return arr.map(
		elem =>
			({
				...elem,
				percentage: elem.score / (arr[0].score === 0 ? 1 : arr[0].score),
			})
	).map(
		elem =>
			[
				`${elem.name} - ${numeral(elem.score).format('0.[' + '0'.repeat(depth) + ']a')}`,
				elem.percentage,
			]
	);
};

module.exports.sort = sort;
