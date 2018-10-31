import { sum } from '../../src/index';

describe('The function `sum`', function () {
	let result;

	beforeEach(function () {
		result = undefined;
	});

	it('is defined', function () {
		expect(sum).toBeDefined();
	});

	describe('correctly sums numbers', function () {
		it('10, 45, 55, 100, 66, 4, 99', function () {
			result = sum(10, 45, 55, 100, 66, 4, 99);
			expect(result).toBe(379);
		});

		it('10.5, 45, 55.2, 100.6, 66, 99', function () {
			result = sum(10.5, 45, 55.2, 100.6, 66, 99);
			expect(result).toBe(376.3);
		});

		it('0, 45, 55.2, 100, 66, -1', function () {
			result = sum(0, 45, 55.2, 100, 66, -1);
			expect(result).toBe(265.2);
		});

		it('-45, 0, -100, -66, -1', function () {
			result = sum(-45, 0, -100, -66, -1);
			expect(result).toBe(-212);
		});
	});

	describe('correctly sums values ignoring not number types', function () {
		it('null, false, "4", undefined, true, 99, 6', function () {
			result = sum(null, false, '4', undefined, true, 99, 6);
			expect(result).toBe(105);
		});
	});

	it('returns the same value for a single argument', function () {
		result = sum(55);
		expect(result).toBe(55);
	});

	it('returns 0 if argument 0 is passed', function () {
		result = sum(0);
		expect(result).toBe(0);
	});

	it('returns 0 if arguments are not defined', function () {
		result = sum();
		expect(result).toBe(0);
	});

});