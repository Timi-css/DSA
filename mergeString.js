/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
*/
let word1 = "abcd";
let word2 = "pqrs";

var mergeAlternately = function (word1, word2) {
  // Initialize Variables: Create an empty array to store the merged characters.
  let resultArr = [];
  let i = 0;
  let j = 0;
  // Loop Through Both Strings: Use a loop to iterate through the characters of both strings simultaneously.
  while (i < word1.length || j < word2.length) {
    // Add Characters Alternately: In each iteration, add one character from word1 and one from word2 to the result array.
    if (i < word1.length) {
      resultArr.push(word1[i]);
      i++;
    }
    if (j < word1.length) {
      resultArr.push(word2[j]);
      j++;
    }
  }
  return resultArr.join("");

  // Handle Remaining Characters: After the loop, append any remaining characters from the longer string to the result array.
  // Return the Result: Convert the result array back to a string and return it.
};

console.log(mergeAlternately(word1, word2));
