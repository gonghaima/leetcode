/**
 * @param {number[]} nums
 * @return {number}
 */

const _ = require('lodash');

var eautestsort = function(apiData) {
  let aggregatedData = {};
  const missingPropertyData = [];
  apiData.map((fes) => {
    // console.log({fes});
    let festivalName = fes?.name || '';
    fes.bands.map((band) => {
      let bandName = band?.name || '';
      if (band?.recordLabel) {
        if (!aggregatedData[band.recordLabel]) {
          aggregatedData[band.recordLabel] = {};
          aggregatedData[band.recordLabel][bandName] = [];
          aggregatedData[band.recordLabel][bandName].push(festivalName);
          console.log('after...');
        } else if (!aggregatedData[band.recordLabel][bandName]) {
          aggregatedData[band.recordLabel][bandName] = [];
          aggregatedData[band.recordLabel][bandName].push(festivalName);
        } else {
          aggregatedData[band.recordLabel][bandName].push(festivalName);
        }
      } else {
        missingPropertyData.push(
          `${band.recordLabel};${bandName || 'NA'};${festivalName || 'NA'}`
        );
      }
    });
  });
  console.log({ aggregatedData });
  console.log({ missingPropertyData });
  // const aggregatedDataArray = [...aggregatedData];
  // console.log({ aggregatedDataArray });
  // return aggregatedDataArray;
  // const sortedaggregatedData = [...aggregatedData].sort((a, b) => {
  //   if (a[0].toLowerCase() < b[0].toLowerCase()) {
  //     return -1;
  //   }
  //   if (a[0].toLowerCase() > b[0].toLowerCase()) {
  //     return 1;
  //   }
  //   return 0;
  //   // return b.split(";")[0].toLowerCase() > a.split(";")[0].toLowerCase();
  // });
  Object.keys(aggregatedData).forEach((k) => {
    // k='Fourth Woman Records'
    // aggregatedData[k] = { 'Jill Black': [Array], 'The Black Dashes': [Array] }
    Object.keys(aggregatedData[k]).forEach((key) => {
      // [Array]
      aggregatedData[k][key] = aggregatedData[k][key].sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    });
  });

  aggregatedData= [...aggregatedData].map(([k,v])=>{
    const vData = v;
    //{ 'Jill Black': [Array], 'The Black Dashes': [Array] }
    const vObjToArr = [...vData].map(([k1,v1])=>{
      return {k1,v1}
    }).sort((a,b)=>{
      if (a[Object.keys()[0]].toLowerCase() < b[Object.keys()[0]].toLowerCase()) {
        return -1;
      }
      if (a[Object.keys()[0]].toLowerCase() > b[Object.keys()[0]].toLowerCase()) {
        return 1;
      }
      return 0;
    })
    return {k,vObjToArr}; 
  })

  console.log({ aggregatedData });
  return aggregatedData;
};

export default eautestsort;
