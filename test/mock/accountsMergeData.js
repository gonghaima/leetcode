export const inputData = {
  case1: [
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]],

  case2: [
    ["David", "David0@m.co", "David4@m.co", "David3@m.co"],
    ["David", "David5@m.co", "David5@m.co", "David0@m.co"],
    ["David", "David1@m.co", "David4@m.co", "David0@m.co"],
    ["David", "David0@m.co", "David1@m.co", "David3@m.co"],
    ["David", "David4@m.co", "David1@m.co", "David3@m.co"]],
  case3: [
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"]]

};

export const expected = {
  case1: [
    ["John", "johnnybravo@mail.com"],
    ["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
    ["Mary", "mary@mail.com"]],

  case2: [["David", "David0@m.co", "David1@m.co", "David3@m.co", "David4@m.co", "David5@m.co"]],
  case3: [["David", "David0@m.co", "David1@m.co", "David2@m.co", "David3@m.co", "David4@m.co", "David5@m.co"]]
};
