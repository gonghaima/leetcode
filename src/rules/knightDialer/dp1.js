/**
 * @param {number} n
 * @return {number}
 */

/***********************************************************************************************
 *   Runtime: 152 ms, faster than 88.18% of JavaScript online submissions for Knight Dialer.   *
 * Memory Usage: 44.5 MB, less than 86.36% of JavaScript online submissions for Knight Dialer. *
 ***********************************************************************************************/

// https://leetcode.com/problems/knight-dialer/discuss/1292870/Java-dp-solution

var knightDialer = function (n) {
	let MOD = 1000000007;
	let dp = new Array(10).fill(1);
	let ans = 0;
	for (let i = 1; i < n; i++) {
		let temp = new Array(10).fill(0);
		temp[0] = (dp[4] + dp[6]) % MOD;
		temp[1] = (dp[6] + dp[8]) % MOD;
		temp[2] = (dp[7] + dp[9]) % MOD;
		temp[3] = (dp[4] + dp[8]) % MOD;
		temp[4] = (((dp[0] + dp[3]) % MOD) + dp[9]) % MOD;
		temp[6] = (((dp[0] + dp[1]) % MOD) + dp[7]) % MOD;
		temp[7] = (dp[2] + dp[6]) % MOD;
		temp[8] = (dp[1] + dp[3]) % MOD;
		temp[9] = (dp[4] + dp[2]) % MOD;
		dp = temp;
	}
	for (let val of dp)
		ans = (ans + val) % MOD;
	return ans;
};

export default knightDialer;