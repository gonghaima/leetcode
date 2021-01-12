/********************************************************************************************************************************
 * Runtime: 124 ms, faster than 91.07% of JavaScript online submissions for Number of Operations to Make Network Connected.     *
 * Memory Usage: 54.3 MB, less than 71.43% of JavaScript online submissions for Number of Operations to Make Network Connected. *
 ********************************************************************************************************************************/

export default (n, connections) => {
    if (connections.length < n - 1) return -1

    const set = new DisjointSet(n)
    for (const [start, end] of connections)
        set.union(start, end)

    return set.numOfComponents - 1
};

class DisjointSet {
    constructor(N) {
        this.numOfComponents = N
        this.componentSize = Array(N).fill(1)
        this.parent = []

        for (let i = 0; i < N; i++)
            this.parent[i] = i
    }

    find(p) {

        // find root
        let root = p
        while (root !== this.parent[root]) {
            root = this.parent[root]
        }

        // path compression
        while (p !== root) {
            const next = this.parent[p]
            this.parent[p] = root
            p = next
        }

        return root
    }

    union(p, q) {
        const rootP = this.find(p)
        const rootQ = this.find(q)

        if (rootP === rootQ) return

        // union by size.
        //by rank as well? 
        // (I don't think it union by rank - level number, it is just by size, it might happens that a flat fat tree having the same size as slim/long tree.
        // but still it is better than do nothing.)
        if (this.componentSize[rootP] < this.componentSize[rootQ]) {
            this.componentSize[rootQ] += this.componentSize[rootP]
            this.parent[rootP] = rootQ
        } else {
            this.componentSize[rootP] += this.componentSize[rootQ]
            this.parent[rootQ] = rootP
        }

        this.numOfComponents--
    }
}
