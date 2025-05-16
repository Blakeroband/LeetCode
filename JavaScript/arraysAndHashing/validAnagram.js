// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// ------------------------------------------------------------------------------------------------------------

function isAnagram(s, t) { // function to check if two strings are anagrams
  if (s.length == t.length) {
    const count = {}; // create an empty object to store the count of each character
    for (let i = 0; i < s.length; i++) { // iterate through the first string
      count[s[i]] = (count[s[i]] || 0) + 1; // increment the count of each character in the object
    }
    for (let i = 0; i < t.length; i++) { // iterate through the second string
      count[t[i]] = (count[t[i]] || 0) - 1; // decrement the count of each character in the object
    }
    for (const key in count) { // check if all counts are zero
      if (count[key] !== 0) {
        return false; // if any count is not zero, return false
      }
    }
    return true; // if all counts are zero, return true
  } else {
    return false; // if the lengths are not equal, return false
  }
}