/* rozwiązanie z pętlą for */
// const x = 4;
const x = Number(prompt('Podaj liczbę!'));

if (isNaN(x) || x < 1 || x > 9) {
	console.log('Wpisz poprawną liczbę z zakresu 1-9.');
} else {
	for (let i = 1; i < 10; i++) {
		console.log(`${x} x ${i} = ${x * i}`);
	}
}

/* rozwiązanie z pętlą while  */

// const a = 3;
// const n = 4;

const a = Number(prompt('Podaj podstawę potęgi 1-9'));
const n = Number(prompt('Podaj wykładnik potęgi 1-9'));

if (isNaN(a) || isNaN(n) || a < 1 || a > 9 || n < 1 || n > 9) {
	console.log('Wpisz poprawną liczbę z zakresu 1-9.');
} else {
	let i = 1;
	let result = 1;
	let text = '';

	while (i <= n) {
		result *= a;

		if (i === n) {
			text += `${a}`;
		} else {
			text += `${a} * `;
		}

		i++;
	}

	console.log(`${text} = ${result}`);
}
