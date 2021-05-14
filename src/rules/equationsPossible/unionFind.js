var equationsPossible = function (equations) {
    let parent = new Map();
    const find = a => {
        parent.set(a, parent.get(a) || a);
        return parent.get(a) === a ? a : find(parent.get(a));
    }

    equations.forEach(([a, s, , b]) => {
        if (s === "=") {
            find(a);
            find(b);
            parent.set(find(a), find(b));
        }
    })

    for (let [a, s, , b] of equations) {
        if (s === "!") {
            if (find(a) === find(b)) return false;
        }
    }
    return true;
};

export default equationsPossible;