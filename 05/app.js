function Student(initFirstName, initLastName) {
	this.firstName = initFirstName;
	this.lastName = initLastName;
	this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
	if (!this.grades[subject]) {
		this.grades[subject] = [];
	}
	return this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
	if (!subject) {
		const newArr = [];
		for (const sub in this.grades) {
			newArr.push(...this.grades[sub]);
		}
		return Number((newArr.reduce((acc, curr) => acc + curr, 0) / newArr.length).toFixed(2));
	} else {
		if (!this.grades[subject]) {
			return 'Nie ma takiego przedmiotu';
		} else {
			return Number(
				(this.grades[subject].reduce((acc, curr) => acc + curr, 0) / this.grades[subject].length).toFixed(2),
			);
		}
	}
};

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
console.log(student);
const avgMath = student.getAverageGrade('maths');
const avgMath1 = student.getAverageGrade('math');
console.log(avgMath);
console.log(avgMath1);
const avg = student.getAverageGrade();
console.log(avg);
