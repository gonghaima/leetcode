export default people => {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  //sort: decrease by height, if equal height increase by k

  let result = [];
  for (let i = 0; i < people.length; i++) {
    result.splice(people[i][1], 0, people[i]); //insert, people[i][1] means the position to insert
  }
  return result;
};
