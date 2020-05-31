export default (numCompetitors, topNCompetitors, competitors, numReviews, reviews) => {
  const resultMap = new Map();
  const output = [];
  reviews.map(review => {
    const review_lower = review.toLowerCase();
    competitors.map(competitor => {
      if (review_lower.indexOf(competitor.toLowerCase()) > -1) {
        if (!resultMap.has(competitor)) resultMap.set(competitor, 1);
        else resultMap.set(competitor, resultMap.get(competitor) + 1);
      }
    });
  });
  const vals = Array.from(resultMap.values());
  const sorted = vals.sort().slice(-topNCompetitors);
  for (let entry of resultMap) {
    if (sorted.includes(entry[1])) {
      output.push(entry[0])
    }
  }
  return output;
};
