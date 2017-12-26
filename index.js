const numeral = require("numeral");

let sort = (p, depth)=>{
    let arr = Object.values(p).sort( (a,b)=>b.score-a.score);
    depth = depth == undefined ? 1 : depth;

    return arr.map(y=> ({...y, percentage: y.score/(arr[0].score == 0 ? 1 : arr[0].score)}), [1]).map(j=>[`${j.name} - ${numeral(j.score).format('0.[' + '0'.repeat(depth) + ']a')}`, j.percentage])
}

module.exports.sort = sort;
