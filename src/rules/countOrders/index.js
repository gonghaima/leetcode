/**
 * @param {number} n
 * @return {number}
 */

 // https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/discuss/516968/JavaC%2B%2BPython-Easy-and-Concise
 // https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/discuss/1301153/Arithmetic-Formula-Explained

var countOrders = function(n) {
    let f=1;
     for(let i =2;i<=n;i++){
         f = f*i*(2*i-1) %(10**9+7);
     }
    return f
};

export default countOrders;
