/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    return Infinity;
};

export default mincostTickets;

1...N
cost of state
[
    0,
    1,
    15
]

two status

hold (previous )
noHold (
    not buy (previous) (if the current number is existing, it will have to buy)
    buy (
        0,
        1,
        2,
        ...
    )
)


two pointers

for(i=0;i<N; i++){
    for(j=0;j<i;j++){
        //find the cheapest option
    }
}