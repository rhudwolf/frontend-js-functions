import { min } from '../../src/index';

describe('The function `min`', function () {
	let array;
	let originArray;
	let result;

	beforeEach(function () {
		array = undefined;
		result = undefined;
		originArray = undefined;
	});

	it('is defined', function () {
		expect(min).toBeDefined();
	});

	describe('correctly finds minimal values in arrays of numbers', function () {
		it('[10, 45, 55, 100, 66, 4, 99]', function () {
			array = [10, 45, 55, 100, 66, 4, 99];
			result = min(array);
			expect(result).toBe(4);
		});

		it('[10.5, 45, 55.2, 100, 66, 99]', function () {
			array = [10.5, 45, 55.2, 100, 66, 99];
			result = min(array);
			expect(result).toBe(10.5);
		});

		it('[0, 45, 55.2, 100, 66, -1]', function () {
			array = [0, 45, 55.2, 100, 66, -1];
			result = min(array);
			expect(result).toBe(-1);
		});

		it('[45, 0, 100, 66, 1]', function () {
			array = [45, 0, 100, 66, 1];
			result = min(array);
			expect(result).toBe(0);
		});
	});

	describe('correctly finds minimal values in arrays of different types', function () {
		it('[10, 45, , , 66, 4, 99]', function () {
			array = [10, 45, , , 66, 4, 99];
			result = min(array);
			expect(result).toBe(4);
		});

		it('[null, false, "4", undefined, true, 99, 524]', function () {
			array = [null, false, '4', undefined, true, 99, 524];
			result = min(array);
			expect(result).toBe(99);
		});
	});

	describe('correctly finds minimal values in arrays of not numbers', function () {
		it('[true, false]', function () {
			array = [true, false];
			result = min(array);
			expect(result).toBe(undefined);
		});

		it('[undefined, "test", " ", null, {}, []]', function () {
			array = [undefined, 'test', ' ', null, {}, []];
			result = min(array);
			expect(result).toBe(undefined);
		});
	});

	it('doesn\'t mutate passed array', function () {
		array = [10, 45, 55, 100, 66, 4, 99];
		originArray = array.concat();
		result = min(array);
		expect(array).toEqual(originArray);
	});

	it('returns `undefined` in an empty array', function () {
		array = [];
		result = min(array);
		expect(result).toBeUndefined();
	});

	it('returns `undefined` if an array is not defined', function () {
		result = min();
		expect(result).toBeUndefined();
	});
});