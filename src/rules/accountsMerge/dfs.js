/************************************************************************************************
 * Runtime: 180 ms, faster than 57.49% of JavaScript online submissions for Accounts Merge.     *
 * Memory Usage: 56.5 MB, less than 29.47% of JavaScript online submissions for Accounts Merge. *
 ************************************************************************************************/

/****************************************************************************************************
 * For each account, draw the edge from the first email to all other emails.                        *
 * Additionally, we'll remember a map from emails to names on the side.                             *
 * After finding each connected component using a depth-first search, we'll add that to our answer. *
 ****************************************************************************************************/

export default (accounts) => {
    let em_to_name = {}, graph = {};

    accounts.map(acc => {
        const [name, acc1, ...rest] = acc;
        em_to_name[acc1] = name;
        graph[acc1] = graph[acc1] ? graph[acc1] : new Set();
        graph[acc1].add(acc1);
        rest.map(email => {
            graph[acc1].add(email);
            graph[email] = graph[email] ? graph[email] : new Set();
            graph[email].add(acc1);
            em_to_name[email] = name;
        })
    });
    const seen = new Set(), stack = [], ans = [];
    Object.entries(graph).map(([email, graphNodes]) => {
        if (!seen.has(email)) {
            seen.add(email);
            stack.push(email);
            const component = [];
            while (stack.length > 0) {
                const node = stack.pop();
                component.push(node);
                for (let nei of graph[node].values()) {
                    if (!seen.has(nei)) {
                        seen.add(nei);
                        stack.push(nei);
                        component.push(nei);
                    }
                }
            };
            ans.push([em_to_name[email], ...[...new Set(component)].sort()]);
        }
    });
    return ans;
};
