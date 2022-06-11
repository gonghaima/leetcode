/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

/*******************************************************************************************************
 * Runtime: 145 ms, faster than 22.47% of JavaScript online submissions for Subdomain Visit Count.     *
 * Memory Usage: 47.1 MB, less than 64.98% of JavaScript online submissions for Subdomain Visit Count. *
 *******************************************************************************************************/

// https://leetcode.com/problems/subdomain-visit-count/submissions/

var subdomainVisits = function(cpdomains) {
  let visitCounts = {};
  for (let i = 0; i < cpdomains.length; i++) {
    // Split visits and domains by the space
    const [visits, domains] = cpdomains[i].split(' ');

    // Create array of subdomains in domain
    let subdomains = domains.split('.');

    while (subdomains.length) {
      // Join all items in subdomains array
      let subdomain = subdomains.join('.');

      // If subdomain already exists in object, add to existing count
      visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain)
        ? Number(visitCounts[subdomain]) + Number(visits)
        : visits;

      // Remove first subdomain from array
      subdomains.shift();
    }
  }

  return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
};

export default subdomainVisits;
