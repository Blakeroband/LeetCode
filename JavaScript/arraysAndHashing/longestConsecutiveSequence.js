// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:

// Input: nums = [0,3,2,5,4,6,1,1]

// Output: 7
// Constraints:

// 0 <= nums.length <= 1000
// -10^9 <= nums[i] <= 10^9


// ------------------------------------------------------------------------------------------------------------------------------
function longestConsecutive(nums) {  // fuctntion to find longest consecutive sequence
  const numSet = new Set(nums);  // create a set to store unique numbers
  let longestStreak = 0; // variable to store the longest streak
  for (const num of numSet) { // a for loop used to iterate through the newly created set
    if (!numSet.has(num - 1)) { // check if the number is the start of a sequence
      let currentNum = num; // variable to store the current number
      let currentStreak = 1; // variable to store the current streak

      while (numSet.has(currentNum + 1)) { // while loop used to check if the next number in the sequence exists
        currentNum++; // if it does, increment the current number
        currentStreak++; // also increment the current streak
      }
      longestStreak = Math.max(longestStreak, currentStreak); // update the longest streak if the current streak is greater
    }
  }
  return longestStreak; // return the longest streak to the user
}