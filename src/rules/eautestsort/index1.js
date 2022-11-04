/**
 * @param {number[]} nums
 * @return {number}
 */

const _ = require('lodash');

var eautestsort = function(apiData) {
  const flattenedData = new Set();
  const missingPropertyData = [];
  apiData.map((fes) => {
    // console.log({fes});
    let festivalName = fes?.name || '';
    fes.bands.map((band) => {
      let bandName = band?.name || '';
      if (band?.recordLabel) {
        flattenedData.add(`${band.recordLabel};${bandName};${festivalName}`);
      } else {
        missingPropertyData.push(
          `${band.recordLabel};${bandName || 'NA'};${festivalName || 'NA'}`
        );
      }
    });
  });
  console.log(...flattenedData);
  console.log({ missingPropertyData });
  const sortedFlattenedData = [...flattenedData].sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log({ sortedFlattenedData });

  const result = [];
  sortedFlattenedData.map((data) => {
    const [l, b, f] = data.split(';');
    if (!result[l]) {
      result[l] = [];
    }
    if (!result[l][b]) {
      result[l][b] = [];
    }
    result[l][b].push(f);
  });

  console.log(JSON.stringify(result));
  return result;
};

export default eautestsort;
