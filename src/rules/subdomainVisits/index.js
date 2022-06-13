/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

/*******************************************************************************************************
 * Runtime: 202 ms, faster than 6.70% of JavaScript online submissions for Subdomain Visit Count.      *
 * Memory Usage: 47.2 MB, less than 55.08% of JavaScript online submissions for Subdomain Visit Count. *
 *******************************************************************************************************/

// https://leetcode.com/problems/subdomain-visit-count/discuss/509052/JavaScript-solution-using-string-replace

var subdomainVisits = function(cpdomains) {
  const map = {};
  cpdomains.forEach((d) => {
    let [count, domain] = d.split(' ');
    while (domain) {
      map[domain] = (map[domain] || 0) + parseInt(count);
      domain = domain.replace(/^[a-z]+\.?/, '');
    }
  });
  return Object.entries(map).map((entry) => `${entry[1]} ${entry[0]}`);
};

export default subdomainVisits;
