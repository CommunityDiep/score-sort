function highestSort(a,b) {
    return a - b;
}

var numeral = require('numeral');

exports.sort = function(players) {
  var sorted = [];

  var stripped = {
  	scores: [],
    names: []
  };

  for (var i in Object.values(players)) {
    stripped.names.push(Object.values(players)[i].name);
    stripped.scores.push(Object.values(players)[i].score);

		sorted.push([]);

		var num = numeral(stripped.scores[i]).format('0.[0]a');

		sorted[i].push(`${stripped.names[i]} - ${num}`);
		sorted[i].push(stripped.scores[i] / stripped.scores[0]);
	}

	console.log(sorted)

  return players
}

exports.sort({ '0.5268519805309624':
   { x: 453.4775905423488,
     y: 1047.5311209541592,
     spdX: 0,
     spdY: -0.00003899650955620383,
     id: 0.5268519805309624,
     update: [Function],
     updatePosition: [Function],
     getDistance: [Function],
     backtoZero: false,
     tier: 4,
     hasUpgraded: false,
     canUpgrade: true,
     hasSecondUpgraded: false,
     hasThirdUpgraded: false,
     dev: false,
     name: 'higher',
     tank: 'basic',
     number: '0',
     pressingRight: false,
     pressingLeft: false,
     pressingUp: false,
     pressingDown: false,
     pressingInc: false,
     pressingDec: false,
     team: 'none',
     teamcolor: undefined,
     autofire: false,
     mouseAngle: -84.61720208487269,
     invisible: false,
     maxSpd: 8,
     hpMax: 10,
     hp: 10,
     regen_timer: 35.19999999999996,
     score: 6200000,
     reload: 0,
     reload_timer: 152,
     autospin: false,
     vX: 0,
     vY: 0,
     shootBullet: [Function],
     updateSpd: [Function],
     getInitPack: [Function],
     getUpdatePack: [Function],
     pressingAttack: false }, '0.5268519805309623':
        { x: 453.4775905423488,
          y: 1047.5311209541592,
          spdX: 0,
          spdY: -0.00003899650955620383,
          id: 0.5268519805309623,
          update: [Function],
          updatePosition: [Function],
          getDistance: [Function],
          backtoZero: false,
          tier: 4,
          hasUpgraded: false,
          canUpgrade: true,
          hasSecondUpgraded: false,
          hasThirdUpgraded: false,
          dev: false,
          name: 'lower',
          tank: 'basic',
          number: '0',
          pressingRight: false,
          pressingLeft: false,
          pressingUp: false,
          pressingDown: false,
          pressingInc: false,
          pressingDec: false,
          team: 'none',
          teamcolor: undefined,
          autofire: false,
          mouseAngle: -84.61720208487269,
          invisible: false,
          maxSpd: 8,
          hpMax: 10,
          hp: 10,
          regen_timer: 35.19999999999996,
          score: 3100000,
          reload: 0,
          reload_timer: 152,
          autospin: false,
          vX: 0,
          vY: 0,
          shootBullet: [Function],
          updateSpd: [Function],
          getInitPack: [Function],
          getUpdatePack: [Function],
          pressingAttack: false } })
