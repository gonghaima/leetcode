/**
 * @param {number[]} nums
 * @return {number}
 */

const comparerLogic = (a, b) => {
  const [recordLabel1, brand1, festival1] = a.split(';');
  const [recordLabel2, brand2, festival2] = b.split(';');

  if (recordLabel1.toLowerCase() !== recordLabel2.toLowerCase())
    return recordLabel1.toLowerCase() < recordLabel2.toLowerCase() ? -1 : 1;

  if (brand1.toLowerCase() !== brand2.toLowerCase())
    return brand1.toLowerCase() < brand2.toLowerCase() ? -1 : 1;

  if (festival1.toLowerCase() !== festival2.toLowerCase())
    return festival1.toLowerCase() < festival2.toLowerCase() ? -1 : 1;
  return 0;
};

var eautestsort = function(apiData) {
  const missingPropertyData = [];
  let recordLabels = [];

  apiData.map((fes) => {
    let festivalName = fes?.name || '';
    fes.bands.map((band) => {
      let bandName = band?.name || '';
      if (band?.recordLabel) {
        recordLabels.push(`${band.recordLabel};${bandName};${festivalName}`);
      } else {
        missingPropertyData.push(
          `${band.recordLabel};${bandName || 'NA'};${festivalName || 'NA'}`
        );
      }
    });
  });

  recordLabels = recordLabels.sort(comparerLogic);

  let mappedResult = [];
  recordLabels.map((record) => {
    const [rLable, bandName, festivalName] = record.split(';');
    if (!mappedResult[rLable]) mappedResult[rLable] = [];
    if (!mappedResult[rLable][bandName]) mappedResult[rLable][bandName] = [];
    if (festivalName) mappedResult[rLable][bandName].push(festivalName);
  });

  return mappedResult;
};

export default eautestsort;
