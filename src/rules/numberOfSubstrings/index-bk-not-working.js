/**
 * @param {string} s
 * @return {number}
 */
// tracker of length


// left=0 , right=s.length
var numberOfSubstrings = function (s) {
    let sCopy = s.slice();
    let left = 0;
    let right = s.length - 1;
    let counter = 1;
    const allOccurrence = [...new Set(s)];
    const totalLength = allOccurrence.length;
    let tracker = new Map();
    for (const char of s) {
        if (tracker.has(char)) tracker.set(char, tracker.get(char) + 1);
        else tracker.set(char, 1);
    }
    const currentArr = [];

    const valid = () => {
        let isValid = true;
        for (let idx = 0; isValid && idx < allOccurrence.length; idx++) {
            const element = allOccurrence[idx];
            if (currentArr.indexOf(element) === -1) isValid = false;
        }
        return isValid;
    }
    let keepChecking = true;

    while (keepChecking) {
        let leftOk = true;
        let rightOk = true;

        const currentLeft = sCopy[0];
        const currentRight = sCopy[sCopy.length - 1];
        const lTracker = new Map(tracker);
        const rTracker = new Map(tracker);

        let leftCopy = left;
        let leftCopyValue = s[left];

        let numberOfTheItem = lTracker.get(leftCopyValue);
        if (numberOfTheItem === 1) {
            leftOk = false;
        } else {
            counter++;
        }


        let rightCopy = right;
        let rightCopyValue = s[right];

        let numberOfTheItem = lTracker.get(rightCopyValue);
        if (numberOfTheItem === 1) {
            rightOk = false;
        } else {
            counter++;
        }


        if (!leftOk && !rightOk) keepChecking = false;
        // remove left 

    }

    for (let right = 0; right < s.length; right++) {

        currentArr.push(s[right]);
        // if  match, counter ++, 
        // while left ++, and valid, left++
        if (valid()) {
            // counter += (s.length - currentArr.length + 1);
            counter++;
            left++;
            currentArr.shift();
            while (valid()) {
                // counter += (s.length - currentArr.length + 1);
                counter++;
                left++;
                currentArr.shift();
            }
        }

        // else, don't need to do anything, just let right increase
        // else
    }
    return counter;
};

// 

export default numberOfSubstrings;