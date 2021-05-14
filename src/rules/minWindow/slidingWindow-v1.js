/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */


/**********************************************************************************************************
 * Runtime: 84 ms, faster than 99.60% of JavaScript online submissions for Minimum Window Substring.      *
 * Memory Usage: 40.4 MB, less than 96.53% of JavaScript online submissions for Minimum Window Substring. *
 **********************************************************************************************************/

// sliding window

var minWindow = function (s, t) {

    let arr = new Array(128).fill(0); // Ascii charSet array to store count
    let result = [-Infinity, Infinity] // result not yet known
    let missing = t.length; // missing words initially

    for (let i = 0; i < t.length; i++) { // increase the count in arr
        arr[t.charCodeAt(i)]++
    }

    let start = 0;

    for (let end = 0; end < s.length; end++) { // start from 0 and then expand
        if (arr[s.charCodeAt(end)] > 0) { // element present in t then decrese missing
            missing--
        }

        arr[s.charCodeAt(end)]-- // if not present in t then make it negative

        while (missing == 0) { // start decrementing start to check the best option
            if (result[1] - result[0] > end - start) { // store the best answer always
                result[1] = end; result[0] = start
            }


            arr[s.charCodeAt(start)]++
            if (arr[s.charCodeAt(start)] > 0) { // if the char is present in t
                missing++
            }

            start++
        }


    }

    return result[1] == Infinity ? "" : s.slice(result[0], result[1] + 1);

};
export default minWindow;