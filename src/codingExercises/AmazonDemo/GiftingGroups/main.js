main();
/*
 * Complete the 'countGroups' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY related as parameter.
 */
function countGroups(related) {
    /**
     * Time Complexity: n^2
     * Space Complexity: O(1)
     */
    let grouped = {}, groupCount = 0;
    let curr, inverse;
    for (let i = 0; i < related.length; i++) {
        if (i in grouped) continue;
        for (let j = 0; j < related[i].length; j++) {
            if (i === j) continue;
            if (j in grouped) continue;
            curr = related[i][j];
            inverse = related[j][i];
            if (curr === "1" && curr === inverse) {
                groupCount++;
                grouped[i] = true;
                grouped[j] = true;
                break;
            } else if (j == (related[i].length - 1)) {
                // at this point, person is currently alone
                groupCount++;
                grouped[i] = true;
            }
        }
    }
    return groupCount;
}

function main() {
    const related = [
        '1100', '1110', '0110', '001'
    ];
    const groupCount = countGroups(related);
    console.log('groupCount: ', groupCount);
}
