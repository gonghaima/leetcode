/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ref = new Map();
  ransomNote.split('').forEach((char) => {
    if (ref.has(char)) {
      ref.set(char, ref.get(char) + 1);
    }else {
      ref.set(char, 1);
    }
  });
  magazine.split('').forEach((char) => {
    if (ref.has(char) && ref.get(char) > 1){
      ref.set(char, ref.get(char) - 1);
    }else if (ref.has(char) && ref.get(char) === 1){
      ref.delete(char);
    }
  });

  return ref.size === 0;
};

export default canConstruct;
