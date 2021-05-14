var equationsPossible = function (equations) {
    let possible = true;

    let color = {};
    let currentColor = 1;
    let colorContainer = {};
    let item = {};

    // coloring based connections
    for (let i = 0; i < equations.length; i++) {
        const [a, s, , b] = equations[i];
        if (s === "!") continue;

        if (!item[a] && !item[b]) {
            // item:color update
            item[a] = currentColor;
            item[b] = currentColor;
            colorContainer[currentColor] = [];

            //color container update
            colorContainer[currentColor].push(a);
            colorContainer[currentColor].push(b);
            currentColor += 1;
        } else if (
            (item[a] && item[b]) &&
            (item[a] !== item[b])
        ) {
            // item:color update
            colorContainer[item[a]] = colorContainer[item[a]] || [];
            colorContainer[item[a]].map(child => {
                item[child] = item[b];
            })

            //color container update
            colorContainer[item[b]] = colorContainer[item[b]] || [];
            colorContainer[item[b]] = colorContainer[item[b]].concat(colorContainer[item[a]]);
            delete colorContainer[item[a]];

        } else if (item[a]) {
            // item:color update
            item[b] = item[a];
            //color container update
            colorContainer[item[a]] = colorContainer[item[a]] || [];
            colorContainer[item[a]].push(b);
        } else {
            // item:color update
            item[a] = item[b];
            //color container update
            colorContainer[item[b]] = colorContainer[item[b]] || [];
            colorContainer[item[b]].push(a);
        }

    }
    // check based on disconnection, if both has the same color, return false
    for (let i = 0; (i < equations.length) && possible; i++) {
        const [a, s, , b] = equations[i];
        if (s === "!") {
            if (
                (item[a] === item[b])
                && (item[a] !== undefined && item[b] !== undefined)
            ) possible = false;

            if (a === b) possible = false;

        }
    }

    return possible;
};

export default equationsPossible;