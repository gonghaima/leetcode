// https://leetcode.com/problems/redundant-connection/discuss/552763/javascript-set-merge

// set merge

export default edges => {
  let sets = []
  for (let [a, b] of edges) {
    let relatedSet = new Set(), noneRelated = []
    for (let set of sets) {
      if (set.has(a) && set.has(b)) return [a, b]
      if (set.has(a) || set.has(b)) {
        relatedSet.add(a)
        relatedSet.add(b)
        for (let edge of set) {
          relatedSet.add(edge)
        }
        continue
      }
      noneRelated.push(set)
    }
    sets = noneRelated
    if (!relatedSet.size) {
      relatedSet.add(a)
      relatedSet.add(b)
    }
    sets.push(relatedSet)
  }
  throw 'no redudant'
};
