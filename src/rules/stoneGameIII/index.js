/**
 * @param {number[]} stoneValue
 * @return {string}
 */

/**
 * 

Max of the following

take [1-3], skip [1-3], take [1-3]...


in (n-3) position,  dp[n-4] + max(stoneValue[n-3], stoneValue[n-3]+stoneValue[n-2], stoneValue[n-3]+stoneValue[n-2]+stoneValue[n-1])

in (n-2) position,  dp[n-3] + max(stoneValue[n-2], stoneValue[n-2]+stoneValue[n-1])

in (n-1) position,  dp[n-2] + stoneValue[n-1]


From beginning,
needTake = true;

oneS = stone[i];
twoS = stone[i]+stone[i+1];
threeS = stone[i]+stone[i+1]+stone[i+2];
needTake = false;

...
Actually, it is a tree. Each level would either be take/skip.

Root is 0;
 
                  					0
		      1[0]			  (1+2)3[1]		      (1+2+3)6[2]
         1[0+1]	     1[0+2]   1[0+3]	   3[1+1]  3[1+2]                  6[2+1]           
4[1+1] 11[1+2]      8[2+1]    		10[2+1] 	  		


Then find the largest child value - largestVal
CompareVal = total - largestVal;

If largestVal>CompareVal: "Alice"
Else "Bob"

 */
var stoneGameIII = function(stoneValue) {
  return null;
};

export default stoneGameIII;
