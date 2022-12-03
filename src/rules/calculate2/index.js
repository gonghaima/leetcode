/**
 * @param {string} s
 * @return {number}
 */

/****************************************************************************************************
 * Runtime: 183 ms, faster than 14.38% of JavaScript online submissions for Basic Calculator II.    *
 * Memory Usage: 60.9 MB, less than 5.17% of JavaScript online submissions for Basic Calculator II. *
 ****************************************************************************************************/

 var calculate2 = function(s) {
	const calculator = s.match(/(\d+)|[+-/*]/g);
	const addition = [+calculator.shift()];
	const operator = {
		'+': (num) => addition.push(num),
		'-': (num) => addition.push(-num),
		'*': (num) => addition.push(addition.pop() * num),
		'/': (num) => addition.push(addition.pop() / num | 0),
	};

	calculator.forEach((str, index) => operator[str]?.(+calculator[index + 1]));
	return addition.reduce((result, num) => result + num);
};

export default calculate2;
