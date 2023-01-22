import { nums } from './data'

main()

/**
 * @param {number[]} nums
 * @return {number}
 */
function subArrayRanges(nums) {
    /**
     * Time Complexity: O(n)
     * Space complexity: O(n)
     */
    let sumOfRanges = 0, sumOfMinInstances = 0, sumOfMaxInstances = 0
    let stack = []

    const getCountSubarrays = (stack, currIndex) => {
        const mid = stack.pop()
        const leftBoundary = stack.at(-1) === undefined ? -1 : stack.at(-1)
        const rightBoundary = currIndex
        const countSubarrays = (mid - leftBoundary) * (rightBoundary - mid)
        return [mid, countSubarrays]
    }

    for (let i = 0; i <= nums.length; i++) {
        // update summation of max instances for each element 
        while (stack.length && (i === nums.length || nums[i] >= nums[stack.at(-1)])) {
            const [mid, countSubarrays] = getCountSubarrays(stack, i)
            sumOfMaxInstances += nums[mid] * countSubarrays
        }
        stack.push(i)
    }
    // reset stack for min
    stack = []
    for (let i = 0; i <= nums.length; i++) {
        // update summation of min instances for each element
        while (stack.length && (i === nums.length || nums[i] <= nums[stack.at(-1)])) {
            const [mid, countSubarrays] = getCountSubarrays(stack, i)
            sumOfMinInstances += nums[mid] * countSubarrays
        }
        stack.push(i)
    }

    sumOfRanges = sumOfMaxInstances - sumOfMinInstances
    return sumOfRanges
}

function subArrayRangesQuadratic() {
    /**
     * Time Complexity: O(n^2)
     * Space Complexity: O(1)
     */
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let max = nums[i], min = nums[i]
        for (let j = i; j < nums.length; j++) {
            max = Math.max(max, nums[j])
            min = Math.min(min, nums[j])
            sum += max - min
        }
    }
    console.log(sum)
    return sum
}

function subArrayRangesExhWithLogs(nums) {
    console.log('input', nums)
    let sum = 0, subArrayLength = 2, maxSubarrayLength = (nums.length - 1)
    while (subArrayLength <= maxSubarrayLength) {
        for (let i = 0; i < nums.length; i++) {
            if (i === nums.length - 1) break;
            if (subArrayLength + i > nums.length) break;
            const subarrDiff = getDiffOfRange(i, subArrayLength + i)
            console.log(`update sum: ${sum} + ${subarrDiff} = ${sum + subarrDiff}`)
            sum += subarrDiff
            // sum+=getDiffOfRange(i, subArrayLength)
        }
        subArrayLength++
    }
    // Then the array as the last subarray
    console.log('=== Last, whole array ===')
    const subarrDiff = getDiffOfRange(0, nums.length + 1)
    console.log(`update sum: ${sum} + ${subarrDiff} = ${sum + subarrDiff}`)
    sum += subarrDiff
    console.log('Final:', sum)

    function getDiffOfRange(start, end) {
        const subarray = nums.slice(start, end) //slice is exclusive of last
        const max = Math.max(...subarray), min = Math.min(...subarray)
        const diff = max - min
        console.log(`start: ${start},end: ${end}`)
        console.log('subarray', subarray)
        console.log(`diff: ${max} - ${min} = ${diff}`)
        return diff
    }
    return sum
};

function subArrayRangesExhNoLogs(nums) {
    let sum = 0, subArrayLength = 2, maxSubarrayLength = (nums.length - 1)
    while (subArrayLength <= maxSubarrayLength) {
        for (let i = 0; i < nums.length; i++) {
            if (i === nums.length - 1) break;
            if (subArrayLength + i > nums.length) break;
            sum += getDiffOfRange(i, subArrayLength + i)
        }
        subArrayLength++
    }
    // Then the array as the last subarray
    sum += getDiffOfRange(0, nums.length + 1)

    function getDiffOfRange(start, end) {
        const subarray = nums.slice(start, end)
        return Math.max(...subarray) - Math.min(...subarray)
    }
    return sum
};

function main() {
    // const nums = [1, 3, 3]
    // const nums = [4,-2,-3,4,1]
    const sum = subArrayRanges(nums)
    console.log(sum)
}
