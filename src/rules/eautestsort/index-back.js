/**
 * @param {number[]} nums
 * @return {number}
 */

var eautestsort = function(apiData) {
  const aggregatedData = new Map();
  const missingPropertyData = [];
  apiData.map((fes) => {
    // console.log({fes});
    let festivalName = fes?.name || '';
    fes.bands.map((band) => {
      let bandName = band?.name || '';
      if (band?.recordLabel) {
        if (!aggregatedData.has(band.recordLabel)) {
          // const brandMap = new Map();
          // const festivalSet = new Set();
          // festivalSet.add(festivalName);
          // brandMap.set(bandName, festivalSet);
          // if (band.recordLabel === 'Marner Sis. Recording') {
          //   console.log('investigate...');
          // }
          // aggregatedData.set(band.recordLabel, brandMap);

          if (band.recordLabel === 'Marner Sis. Recording') {
            console.log('investigate...');
          }
          aggregatedData.set(
            band.recordLabel,
            new Map().set(bandName, new Set().add(festivalName))
          );
          console.log('after...');
          // } else if (!(aggregatedData.get(`${band.recordLabel}`)).has(bandName)) {
        } else {
          if (band.recordLabel === 'Marner Sis. Recording') {
            console.log('investigate...');
          }
          if (!aggregatedData.get(band.recordLabel)['has']) {
            console.log('');
          }
          aggregatedData
            .get(`${band.recordLabel}`)
            .set(bandName, new Set().add(festivalName));
          aggregatedData.set(`${band.recordLabel}`, festivalName);
        }

        if (0) {
        } else if (true) {
          if (!aggregatedData.get(band.recordLabel)['has']) {
            console.log('');
          }
          aggregatedData
            .get(`${band.recordLabel}`)
            .set(bandName, new Set().add(festivalName));
          aggregatedData.set(`${band.recordLabel}`, festivalName);
        } else {
          aggregatedData
            .get(`${band.recordLabel}`)
            .get(bandName)
            .add(festivalName);
        }
        // aggregatedData.add(`${band.recordLabel};${bandName};${festivalName}`);

        // if (!aggregatedData.has(band.recordLabel))
        //   aggregatedData.add(band.recordLabel);
      } else {
        missingPropertyData.push(
          `${band.recordLabel};${bandName || 'NA'};${festivalName || 'NA'}`
        );
      }
    });
  });
  console.log(...aggregatedData);
  console.log({ missingPropertyData });
  const sortedaggregatedData = [...aggregatedData].sort((a, b) => {
    if (a[0].toLowerCase() < b[0].toLowerCase()) {
      return -1;
    }
    if (a[0].toLowerCase() > b[0].toLowerCase()) {
      return 1;
    }
    return 0;
    // return b.split(";")[0].toLowerCase() > a.split(";")[0].toLowerCase();
  });
  console.log({ sortedaggregatedData });

  const result = [];
  sortedaggregatedData.forEach((s) => s);
  sortedaggregatedData.map((data) => {
    const [l, b, f] = data.split(';');
    if (!result[l]) {
      result[l] = [];
    }
    if (!result[l][b]) {
      result[l][b] = [];
    }
    result[l][b].push(f);
  });
  return sortedaggregatedData;
};

export default eautestsort;
