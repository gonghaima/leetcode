export const inputData = {
  case1: [
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]]
};

export const expected = {
  case1: [
    ["John", "johnnybravo@mail.com"],
    ["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
    ["Mary", "mary@mail.com"]]
};
