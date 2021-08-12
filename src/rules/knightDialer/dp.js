/**
 * @param {number} n
 * @return {number}
 */

/*********************************************************************************************
 *  Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Knight Dialer.  *
 * Memory Usage: 41 MB, less than 99.07% of JavaScript online submissions for Knight Dialer. *
 *********************************************************************************************/

// https://www.youtube.com/watch?v=DuUna9RX-Q8
// https://leetcode.com/problems/knight-dialer/discuss/655853/If-you-want-to-laugh...check-out-this-stupid-solution(guarantee-you-could-understand!!!))

var knightDialer = function (n) {
	let kMod = 1e9 + 7;
	let hop1 = 1; // number of ways to form a distinct number ending with key 1
	let hop2 = 1;
	let hop3 = 1;
	let hop4 = 1;
	let hop5 = 1;
	let hop6 = 1;
	let hop7 = 1;
	let hop8 = 1;
	let hop9 = 1;
	let hop0 = 1;

	if (n == 1) return 10;
	for (let i = 2; i <= n; i++) {
		let old_1 = hop1;
		let old_2 = hop2;
		let old_3 = hop3;
		let old_4 = hop4;
		let old_5 = hop5;
		let old_6 = hop6;
		let old_7 = hop7;
		let old_8 = hop8;
		let old_9 = hop9;
		let old_0 = hop0;

		hop1 = (old_6 + old_8) % kMod;
		hop2 = (old_7 + old_9) % kMod;
		hop3 = (old_4 + old_8) % kMod;
		hop4 = (old_3 + old_9 + old_0) % kMod;
		hop5 = 0;
		hop6 = (old_1 + old_7 + old_0) % kMod;
		hop7 = (old_2 + old_6) % kMod;
		hop8 = (old_1 + old_3) % kMod;
		hop9 = (old_2 + old_4) % kMod;
		hop0 = (old_4 + old_6) % kMod;
	}

	return (hop1 + hop2 + hop3 + hop4 + hop6 + hop7 + hop8 + hop9 + hop0) % kMod;
};

export default knightDialer;