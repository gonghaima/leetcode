/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   // place words into an array
   sArr = s.split(' ')

   // if the pattern is lopsided return false
   if (pattern.length !== sArr.length) return false
   
   // create a key map and value map
   /* as a caveat, we can't use one map here
    * in the edge-case that a pattern key 
    * and values in s contain the same characters
    * 
    * eg. pattern = 'abc', s = 'c b a'
    */
   const kMap = {} // key map
   const vMap = {} // value map

   for (let i = 0; i < pattern.length; i++) {
       const key = pattern[i] // letter at index i in pattern
       const value = sArr[i] // word at index i in s 

       // if key or value already exists and does not correspond to
       // eachother, return false because we don't have a valid pattern
       if (key in kMap || value in vMap) {
           if (kMap[key] !== value) return false
           if (vMap[value] !== key) return false
       } else {
           kMap[key] = value
           vMap[value] = key
       }
   }

   return true // pattern is valid
};

export default wordPattern;
