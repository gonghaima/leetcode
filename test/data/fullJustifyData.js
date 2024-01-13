export const inputData = {
  case1: {
    words: ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
    maxWidth: 16,
  },
  case2: {
    words: ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
    maxWidth: 16,
  },
  case3: {
    words: [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do',
    ],
    maxWidth: 20,
  },
};

export const expected = {
  case1: ['This    is    an', 'example  of text', 'justification.  '],
  case2: ['What   must   be', 'acknowledgment  ', 'shall be        '],
  case3: [
    'Science  is  what we',
    'understand      well',
    'enough to explain to',
    'a  computer.  Art is',
    'everything  else  we',
    'do                  ',
  ],
};
