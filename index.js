
let sort = (p)=>{
    let arr = Object.values(p).sort( (a,b)=>b.score-a.score)
    return arr.map(y=> ({...y, percentage: y.score/(arr[0].score == 0 ? 1 : arr[0].score)}), [1]).map(j=>[`${j.name} - ${j.score}`, j.percentage])
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
