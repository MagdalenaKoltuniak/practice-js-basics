const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
// const a = 21;
// const b = 33;
// const c = 21;

console.log(a, b, c);

function getSum(num1, num2, num3) {
	const intNum1 = parseInt(num1);
	const intNum2 = parseInt(num2);
	const intNum3 = parseInt(num3);

	return [intNum1, intNum2, intNum3]
		.sort((a, b) => a - b)
		.slice(-2)
		.reduce((acc, curr) => acc + curr, 0);
}

const isEven = function (num) {
	return typeof num !== 'number' ? null : num % 2 === 0;
};

const showInfo = (val, flag) => {
	switch (flag) {
		case null:
			console.log(`Podany argument ${val} nie jest liczbą`);
			break;
		case true:
			console.log(`Podany argument ${val} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${val} jest nieparzysty`);
			break;
		default:
			console.log('Drugi parametr musi być: null, true lub false');
	}
};

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

const totalSum = getSum(a, b, c);
const isNumberIsEven = isEven(totalSum);
showInfo(totalSum, isNumberIsEven);
