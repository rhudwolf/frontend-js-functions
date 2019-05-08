// min
// min([7, 8, 9, 5, 1]); // 1
// min([]); // undefined

export function min (obj) {
	let zero = obj[0];

	for (let i = 1; i < obj.length; i++) {
		if (obj[i] < zero) {
			zero = obj[i];
		}
	}
	return zero;
}

// max
// max([7, 8, 9, 5, 1]); // 9
// max(); // undefined
// let arr = [3,2,5,6];

export function max (obj) {
	let zero = obj[0];

	for (let i = 1; i < obj.length; i++) {
		if (obj[i] > zero) {
			zero = obj[i];
		}
	}
	return zero;
}

// sum
// sum(7, 8, 9, 5, 1); // 30
// sum(); // 0
// let arr = [3,2,5,6];

export function sum (arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// function average(numbers) {
// 	let result;
// 	let numbersAmount = numbers.length;
// 	let sum = 0;
// 	let number;

// 	for (number of numbers) {
// 		sum += number;
// 	}
// 	result = sum / numbersAmount;

// 	return result;
// }

// let array = [1, 2, 3];

// average(array);


// ЗАДАЧА: сумма до числа
// function numberSum (Num) {

// 	let total = 0;

// 	for (let i = 1; i <= Num; i++) {
// 		total += i;
// 	}
// 	return total;
// }
// numberSum(4);