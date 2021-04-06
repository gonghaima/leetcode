

/***************************************************************************************************************************************
 * Runtime: 80 ms, faster than 100.00 % of JavaScript online submissions for Number of Substrings Containing All Three Characters.     *
 * Memory Usage: 40.3 MB, less than 57.14 % of JavaScript online submissions for Number of Substrings Containing All Three Characters. *
 ***************************************************************************************************************************************/



/************************************************************************************************************************************************************
 * just maintain three pointers to hold most recent indices of a,b and c .                                                                                  *
 * then the number of substrings at any index lets say with char c is the most closest index to left from where a and b are found +1 for the new substring. *
 ************************************************************************************************************************************************************/


//simple 

var numberOfSubstrings = function (s) {
    let ans = 0;
    // Stores recent index of the characters 
    let a_index = -1;
    let b_index = -1;
    let c_index = -1;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        // If character is a update a's index 
        // and the variable ans 
        if (s.charAt(i) == 'a') {
            a_index = i;
            if (b_index != -1 && c_index != -1) {
                ans = ans + Math.min(b_index, c_index) + 1;
            }
        }
        // If character is b update b's index 
        // and the variable ans 
        else if (s.charAt(i) == 'b') {
            b_index = i;
            if (a_index != -1 && c_index != -1) {
                ans = ans + Math.min(a_index, c_index) + 1;
            }
        }
        // If character is c update c's index 
        // and the variable ans 
        else {
            c_index = i;
            if (b_index != -1 && a_index != -1) {
                ans = ans + Math.min(a_index, b_index) + 1;
            }
        }
    }
    return (ans);
};

export default numberOfSubstrings;