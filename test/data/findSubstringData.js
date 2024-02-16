export const inputData = {
  case1: {
    s : "barfoothefoobarman", words : ["foo","bar"]
  },
  case2: {
    s : "wordgoodgoodgoodbestword", words : ["word","good","best","word"]
  },
  case3: {
    s : "barfoofoobarthefoobarman", words : ["bar","foo","the"]
  },
};

export const expected = {
  case1: [0,9],
  case2: [],
  case3: [6,9,12],
};
