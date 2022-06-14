/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

/*******************************************************************************************************
 * Runtime: 96 ms, faster than 74.73% of JavaScript online submissions for Subdomain Visit Count.      *
 * Memory Usage: 46.8 MB, less than 72.57% of JavaScript online submissions for Subdomain Visit Count. *
 *******************************************************************************************************/

// https://leetcode.com/problems/subdomain-visit-count/discuss/401943/JavaScript-Simple-solution

const subdomainVisits = (cpdomains) => {
  const domainVisitsMap = {};

  for (let i = 0; i < cpdomains.length; i++) {
    const [visits, domain] = cpdomains[i].split(' ');

    const subDomains = domain.split('.');

    for (let j = 0; j < subDomains.length; j++) {
      const subDomain = subDomains.slice(j).join('.');
      !domainVisitsMap[subDomain]
        ? (domainVisitsMap[subDomain] = +visits)
        : (domainVisitsMap[subDomain] += +visits);
    }
  }

  return Object.keys(domainVisitsMap).map(
    (key) => `${domainVisitsMap[key]} ${key}`
  );
};

export default subdomainVisits;
