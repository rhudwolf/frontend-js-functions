// min
// min([7, 8, 9, 5, 1]); // 1
// min([]); // undefined
let arr = [3,2,5,6];

function min(obj) {
	var a = obj[0];

	for (var i = 1; i < obj.length; i++) {
		if (obj[i] < a) {
			a = obj[i];
		}
	}
	return a;
}

min(arr);

//max
// max([7, 8, 9, 5, 1]); // 9
// max(); // undefined
let arr = [3,2,5,6];

function max(obj) {
	var a = obj[0];

	for (var i = 1; i < obj.length; i++) {
		if (obj[i] > a) {
			a = obj[i];
		}
	}
	return a;
}

max(arr);

//sum
// sum(7, 8, 9, 5, 1); // 30
// sum(); // 0
let arr = [3,2,5,6];

function sum(arr){
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    }
console.log(sum);
}

sum(arr);