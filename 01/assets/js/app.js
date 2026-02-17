const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const addition = Number(a) + b;
const concatenation = a + b.toString();
const subtraction = a - b;
const multiplication = a * b;
const division = b / a;
const modulo = b % a;

console.log(
	`addition: ${addition}, concatenation: ${concatenation}, subtraction: ${subtraction}, multiplication: ${multiplication}, division: ${division}, modulo: ${modulo}`,
);

const arr = [addition, concatenation, subtraction, multiplication, division, modulo];

arr.forEach(el => {
	if (Number(el) >= 20) {
		console.log(`${el} jest większe od 20`);
	} else {
		console.log(`${el} jest mniejsze od 20`);
	}
});
