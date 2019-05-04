// min
// min([7, 8, 9, 5, 1]); // 1
// min([]); // undefined

function min(obj) {
	var a = obj[0];

	for (var i = 1; i < obj.length; i++) {
		if (obj[i] < a) {
			a = obj[i];
		}
	}
	return a;
}

console.log(min([7, 8, 9, 5, 1]));

//max
// max([7, 8, 9, 5, 1]); // 9
// max(); // undefined
function max(obj) {
	var b = obj[0];

	for (var i = 1; i < obj.length; i++) {
		if (obj[i] > b) {
			b = obj[i];
		}
	}
	return b;
}

console.log(min([7, 8, 9, 5, 1]));

//sum
// sum(7, 8, 9, 5, 1); // 30
// sum(); // 0