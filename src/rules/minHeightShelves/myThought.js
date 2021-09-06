/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */

/**
 * 
 * another thought
 *     // in dp[i-1]
        // if capacity > dp[i][0]
            // if last row height of dp[i-1] > dp[i][0], return  height of dp[i-1] 
            // else return height of dp[i-1] - last row height of dp[i-1] + height of dp[i]
        // else not enough capacity, return  dp[i-1] + height of dp[i]

        // maxHeight=Math.max(maxHeight, dp[])
 */

var minHeightShelves = function (books, shelfWidth) {
    const cache = Array(books.length + 1).fill(0);
    const dp = (cache, shelfWidth, currentIndex, minHeight) => {
        if (cache[currentIndex]) return cache[currentIndex];
        if (currentIndex === 0) return books[0][1];
        //loop all possibilities within shelfWidth capacity
        let widthCapacity = shelfWidth;
        let currentMax = Number.MIN_VALUE;
        for (let i = 0; i < currentIndex; i++) {
            let j = 1;
            for (let j = 1; widthCapacity > 0 && books[i - j] && books[i - j][0] > widthCapacity; j++) {
                let maxItoJ = Number.MIN_VALUE;
                for (let x = i; x < i + j + 1; x++) {
                    maxItoJ = Math.max(books[x][1]);
                };
                currentMax = Math.max(currentMax, dp(cache, shelfWidth, currentIndex - j) + maxItoJ);
                widthCapacity -= books[i][j];
            };
            minHeight = Math.min(minHeight, currentMax);
            cache[i] = minHeight;
        };
        return minHeight;
    };
    return dp(cache, shelfWidth, books.length, Number.MIN_VALUE);
};


export default minHeightShelves;