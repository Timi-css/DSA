/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

let s = "A man, a plan, a canal: Panama"
// let s = "race a car"

const isPalindrome = (s) => {
        let sArr = s.split("")
        let cleanSArr = sArr.map(part => part.replace(/[^a-zA-Z0-9]/g, '')).join("")
        let newArr = cleanSArr.toLowerCase().split("")
        let l = 0
        let r = newArr.length - 1

        while (l <= newArr.length) {
                if (newArr[l] !== newArr[r]) {
                        return false
                }
                if (newArr[l] == newArr[r])
                        l += 1; r -= 1
        }
        return true

}



console.log(isPalindrome(s))