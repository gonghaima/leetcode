/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  magazine.split("").map((char) => {
    ransomNote = ransomNote.replace(char, "");
  });
  return !ransomNote;
};

export default canConstruct;
