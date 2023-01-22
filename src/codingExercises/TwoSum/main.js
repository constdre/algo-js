// =============================================================
// Algorithm
// iterate over nums, subtract target and element
// if the addend exists, return the current i and indAddend
// =============================================================

// =============================================================
// Best datastructure: unordered map ie object.
// Anything that involves retrieval, a map will perform 
// faster. 
// =============================================================

main();

// Best - unordered map, no need for order of insertion anyway
function twoSumMap(nums, target) {
    const seen = {};
    let addend;
    for (let i = 0; i < nums.length; i++) {
        addend = target - nums[i];
        if (addend in seen) {
            return [seen[addend], i];
        }
        seen[nums[i]] = i;
    }
}

// Using the ES6 Map - ordered
function twoSumOrderedMap(nums, target) {
    const map = new Map();
    let addend;

    for (let i = 0; i < nums.length; i++) {
        addend = target - nums[i];
        if (map.has(addend)) {
            return [map.get(addend), i]
        }
        map.set(nums[i], i);
    }
}

function twoSumArray(nums, target) {
    // Decent speed, better than 38% in terms of speed
    let addendIndex, addend;
    for (let i = 0; i < nums.length; i++) {
        addend = target - nums[i];
        addendIndex = nums.findIndex(x => x === addend);
        if (addendIndex >= 0 && addendIndex !== i) {
            return [i, addendIndex];
        }
    }
}
function twoSumArrayToMap(nums, target) {
    // Slow
    const map = new Map(nums.map((x, i) => ([i, x])));
    let addend, addendIndex;
    for (let [key, value] of map) {
        addend = target - value;
        addendIndex = findKeyByValue(addend, key);
        if (addendIndex > 0 && map.has(addendIndex)) {
            return [key, addendIndex];
        }
    }

    function findKeyByValue(value, currentKey) {
        // This portion is already O(n^2)
        const element = [...map].find(x =>
            x[1] === value
            && x[0] !== currentKey)
        return element ? element[0] : -1;
    }
}

function main() {
    // let nums = [3, 2, 4];
    // let target = 6;
    // console.log(twoSum(nums, target));

    let nums = [3, 3];
    let target = 6;
    console.log(twoSumMap(nums, target));
}