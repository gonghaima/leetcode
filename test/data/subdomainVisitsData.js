export const inputData = {
  case1: ['9001 discuss.leetcode.com'],
  case2: [
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ],
};

export const expected = {
  case1: ['9001 leetcode.com', '9001 discuss.leetcode.com', '9001 com'],
  case2: [
    '901 mail.com',
    '50 yahoo.com',
    '900 google.mail.com',
    '5 wiki.org',
    '5 org',
    '1 intel.mail.com',
    '951 com',
  ],
};
