/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// https://leetcode.com/problems/word-ladder/solutions/659447/javascript-heavily-commented-bfs-solution/

/***********
 * Runtime *
 * 225 ms  *
 * Beats   *
 * 92.44%  *
 * Memory  *
 * 50.9 MB *
 * Beats   *
 * 45.94%  *
 ***********/

const differs = (word1, word2) => {
    let diffCounter = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diffCounter++;
        }
    }
    return diffCounter === 1;
}

var ladderLength = function(beginWord, endWord, wordList) {
    const adjList = {};
    for (let k of [...wordList, beginWord]) {
        adjList[k] = [];
        for (const nextWord of wordList) {
            if (differs(k, nextWord)) {
                adjList[k].push(nextWord);
            }
        }
    }
    
    let stack = [...adjList[beginWord]];
    let tmpStack = [];
    const visited = new Set();
    let counter = 1;
    while (stack.length) {
        const word = stack.pop();
        if (word === endWord) {
            return counter + 1;
        }
        if (!visited.has(word)) {
            visited.add(word);
            for (const k of adjList[word]) {
              if (!visited.has(k)) {
                  tmpStack.push(k);
              }   
            }
        }
        
       if (!stack.length) {
           stack = tmpStack;
           tmpStack = [];
           counter++;
       }
    }
    return 0;
};

export default ladderLength;
