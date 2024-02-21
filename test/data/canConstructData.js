export const inputData = {
  case1: { ransomNote : "a", magazine : "b" },
  case2: { ransomNote : "aa", magazine : "ab" },
  case3: { ransomNote : "aa", magazine : "aab" },
};

export const expected = {
  case1: false,
  case2: false,
  case3: true,
};
