# score-sort [![Build Status](https://travis-ci.org/CommunityDiep/score-sort.svg?branch=master)](https://travis-ci.org/CommunityDiep/score-sort)

A sorter for scoreboards for the official cDiep client to digest easily.

## Test Cases

Here's a test case that tests depth (up to ten-thousandths' place) and sorting:

```js
sort({
	'hi': {
		score: 1250,
		name: 'Hello 1'
	},
	'hi2': {
		score: 2512,
		name: 'Hello 2'
	}
}, 2);
```

This should return:

```js
[[
  'Hello 2 - 2.51k',
  1
], [
  'Hello 1 - 1.25k',
  0.49761146496815284
]]
```
