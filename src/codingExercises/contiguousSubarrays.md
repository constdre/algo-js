Given an array, find how many subarrays are there that involve arr[i]

Divide the array into:
1. Left
2. Element
3. Right

num subarrays = i-index of left boundary (exclusive) * index of right boundary (exclusive) - i

Example

Given an array: [0,3,4,5,2,3,4,1,4]

The array/range where 2 is the minimum is from index 1 to 6: [right bound i=0, 3,4,5,2,3,4, left bound i = 7]

Divide the array into the 3 parts:
- Left: [3,4,5]
- Element: [2]
- Right: [3,4]

num subarrays = 4 - 0 * 7 - 4 = 12 subarrays


Ref: https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2700011/sum-of-subarray-minimums/
