/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */

/**********************************************************************************************
 * Runtime: 148 ms, faster than 76.32% of JavaScript online submissions for Shifting Letters. *
 **********************************************************************************************/
 Memory Usage: 66.3 MB, less than 32.89% of JavaScript online submissions for Shifting Letters.

// https://leetcode.com/problems/shifting-letters/discuss/2032876/javascript-easy-understanding-O(n)

var shiftingLetters = function(s, shifts) {
  let len=shifts.length;
    let a=[]
    for(i=len-2;i>=0;i--){
        shifts[i]=shifts[i]+shifts[i+1]
    }
    let lens=s.length;
    for(i=0;i<lens;i++){
        a[i]=s.charCodeAt(i)+shifts[i];
         if(a[i]>122){
           let rem=(a[i]-97)%26
            a[i]=97+rem
        }
    }
    return String.fromCharCode(...a);
   
};
export default shiftingLetters;
