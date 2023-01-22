function minimalHeavierSet(arr) {
    const weightsDesc = sortDesc(arr);
    const subsetA = [weightsDesc[0], weightsDesc[1]];
    let subsetB, weightSubsetA, weightSubsetB;
    while (true) {
        weightSubsetA = getSumOfNumberArray(subsetA);
        subsetB = weightsDesc.slice(subsetA.length, weightsDesc.length + 1);
        weightSubsetB = getSumOfNumberArray(subsetB);
        if (weightSubsetA > weightSubsetB && subsetA.length < subsetB.length) {
            return sortAsc(subsetA);
        } else {
            // Get next largest
            subsetA.push(weightsDesc[subsetA.length]);
        }
    }
}

function sortDesc(arr) {
    return arr.sort((a, b) => b - a);
}
function sortAsc(arr) {
    return arr.sort((a, b) => a - b);
}
function getSumOfNumberArray(arr) {
    return arr.length >= 2
        ? arr.reduce((a, b) => a + b)
        : 0
}

export default minimalHeavierSet;

// Time Complexity: O(1)
// Space Complexity: O(1) 
// Improvements
// - Design it to scale, make it object oriented