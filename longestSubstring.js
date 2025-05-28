var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  for (let l = 0; l < s.length; l++) {
    let r = l;
    let window = [];
    let valid = true;
    while (valid) {
      if (window.indexOf(s[r]) == -1) {
        window.push(s[r]);
      } else {
        if (longest < window.length) {
          longest = window.length;
        }
        valid = false;
      }
      r++;
      if (r == s.length) {
        valid = false
      }
    }
  }
  return longest;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));

// const chars = [" "];

// if (chars.indexOf(" ") == -1) {
//   console.log("ding");
// } else {
//   console.log("no");
// }

// console.log(chars);
