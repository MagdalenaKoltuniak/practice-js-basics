const min = 1;
const max = 100;

const arr = createArray(1, 100);
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(largest);
console.log(avg);

function createArray(min, max) {
	const arr = [];
	for (let i = 0; i < 20; i++) {
		const num = Math.round(Math.random() * (max - min) + min);
		arr.push(num);
	}
	return arr;
}

function getLargest(array) {
	return array.sort((a, b) => b - a).slice(0, 10);
}

function getAvg(array) {
	return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
