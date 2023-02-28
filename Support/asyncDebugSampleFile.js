/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
import 'regenerator-runtime/runtime';

const https = require('https');

async function get(url, data) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 1000, // in ms
  };

  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
        return reject(new Error(`HTTP status code ${res.statusCode}`));
      }

      const body = [];
      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request time out'));
    });

    // req.write(dataString);
    req.end();
  });
}

// thoughts - bfs
// find list of lengths from wordDict
// build next array of map (remaining: valSoFar ), by

// match list -> next
// for each match item, keep add into match list for next iteration

// if next array is empty, and still has remaining, return empty
// otherwise, rebuild foundings, return the result
var wordBreak = async (statusQuery) => {
  const fetchPromise = await get(
    `https://jsonmock.hackerrank.com/api/iot_devices/search?status=${statusQuery}&page=3`
  );
  debugger;
  const res = await fetchPromise.Response.body;
  return res;
};

export default wordBreak;

// const statusQuery = 'RUNNING';
// let res = await fetch(
//   `https://jsonmock.hackerrank.com/api/iot_devices/search?status=${statusQuery}&page=3`
// );
// let reader = res.body.getReader();
// let result;
// let decoder = new TextDecoder('utf8');
// while (!result?.done) {
//   result = await reader.read();
//   let chunk = decoder.decode(result.value);
//   console.log(chunk);
// }

// let res = await fetch('...');
// let reader = res.body.getReader();
// let result;
// let decoder = new TextDecoder('utf8');
// while (!result?.done) {
//   result = await reader.read();
//   let chunk = decoder.decode(result.value);
//   console.log(chunk);
// }

// const http = require('https');

// httprequest().then((data) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify(data),
//   };
//   return response;
// });

async function getResult(res) {
  let reader = res.body.getReader();
  let data = [];
  let result;
  let totalPage;
  let decoder = new TextDecoder('utf8');
  while (!result?.done) {
    result = await reader.read();
    let chunk = decoder.decode(result.value);
    console.log(chunk);
    data.concat(chunk.data);
    totalPage = chunk.total_pages;
  }
  return { data, totalPage };
}
