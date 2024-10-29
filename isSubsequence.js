/*
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


*/
let s = "abc"
let t = "ahbgdc"

var isSubsequnce = (s, t) => {
        let sIndex = 0
        let tIndex = 0

        while (tIndex < t.length) {
                if (s[sIndex] == t[tIndex]) {
                        console.log(s[sIndex], t[tIndex])
                        sIndex += 1

                }
                if (sIndex === s.length) {
                        return true
                }

                tIndex += 1

        }
        return false
}

console.log(isSubsequnce(s, t))