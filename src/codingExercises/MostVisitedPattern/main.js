
function mostVisitedPattern(username, timestamp, website) {
    const visitedPatterns = new Map()
    let mostVisited = { count: 0, patterns: [], indices: [] }
    for (let i = 2; i < username.length; i++) {
        const curr = i, prev = i - 1, prev2 = i - 2
        // is there a pattern: 3 consecutive visits by the same user
        if (username[prev2] === username[prev] && username[prev] === username[curr]) {
            // sort the website visits by timestamps
            const indices = sortPatternByTimestamp(timestamp, [prev2, prev, curr])
            const stringPattern = `${website[indices[0]]},${website[indices[1]]},${website[indices[2]]}`
            // Store pattern and instances
            let visitCount = visitedPatterns.get(stringPattern)
            if (visitCount) {
                visitCount++
                visitedPatterns.set(stringPattern, visitCount)
                // update most visited record
                if (visitCount > mostVisited.count) {
                    mostVisited = {
                        count: visitCount,
                        patterns: [stringPattern],
                    }
                } else if (visitCount === mostVisited.count) {
                    mostVisited.patterns.push(stringPattern)
                }
            } else {
                // insert new pattern
                visitedPatterns.set(stringPattern, 1)
                if (mostVisited.count === 1) {
                    mostVisited.patterns.push(stringPattern)
                }
            }
            // initialize most visited
            if (!mostVisited.count) {
                mostVisited = {
                    count: 1,
                    patterns: [stringPattern]
                }
            }
        }
    }

    console.log('mostVisited:', mostVisited)

    let mostVisitedPattern = mostVisited.patterns.length > 1
        ? lexicographicallySmallestPattern(mostVisited.patterns)
        : mostVisited.patterns[0]
    mostVisitedPattern = mostVisitedPattern.split(',')
    // sort according to timestamp

    console.log('mostVisitedPattern: ', mostVisitedPattern)
    return mostVisitedPattern
}

function lexicographicallySmallestPattern(arr) {
    let areAllEqual = true, ind = 0, smallestPatterns = []
    const cleanedArr = arr.map(x => x.replaceAll(',', ''))
    console.log('cleanedArr', cleanedArr)
    let smallestCharPoint = cleanedArr[0].charCodeAt(0) - 97
    // return
    while (areAllEqual) {
        for (let i = 0; i < cleanedArr.length; i++) {
            debugger
            const strPattern = cleanedArr[i]
            const charPoint = strPattern.charCodeAt(ind) - 97
            if (charPoint < smallestCharPoint) {
                smallestCharPoint = charPoint
                smallestPatterns = [arr[i]]
                areAllEqual = false
            } else if (charPoint === smallestCharPoint) {
                smallestPatterns.push(arr[i])
            }
        }
        ind++
    }
    if (smallestPatterns.length === 1) return smallestPatterns[0]
    else if (smallestPatterns.length > 1) {
        return lexicographicallySmallestPattern(smallestPatterns)
    }
}
// function lexicographicallySmallestPattern(arr) {
//     let smallestPattern = { pattern: '', charPoints: Number.MAX_SAFE_INTEGER }
//     for (let i = 0; i < arr.length; i++) {
//         const cleanedStr = arr[i].match(/[a-z]+/g).join('')
//         const charPoints = getSumOfCharPoints(cleanedStr)
//         console.log(`charPoints for ${arr[i]}`, charPoints)
//         if (charPoints < smallestPattern.charPoints) {
//             smallestPattern.pattern = arr[i]
//             smallestPattern.charPoints = charPoints
//         }
//     }
//     return smallestPattern.pattern
// }
function getSumOfCharPoints(str) {
    const strArr = [...str]
    return strArr.reduce((a, b, i) =>
        a + str.charCodeAt(i) - 97,
        str.charCodeAt(0) - 97)
}
function sortPatternByTimestamp(timestampArr, patternInds) {
    const timestamps = {
        [timestampArr[patternInds[0]]]: patternInds[0],
        [timestampArr[patternInds[1]]]: patternInds[1],
        [timestampArr[patternInds[2]]]: patternInds[2]
    }
    const sorted = Object.keys(timestamps).sort((a, b) => a - b)
    return [timestamps[sorted[0]], timestamps[sorted[1]], timestamps[sorted[2]]]
}

function main() {
    // const username = ["ua", "ua", "ua", "ub", "ub", "ub"], timestamp = [1, 2, 3, 4, 5, 6], website = ["a", "b", "a", "a", "b", "c"]
    // const username = ["joe", "joe", "joe", "james", "james", "james", "james", "mary", "mary", "mary"],
    //     timestamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //     website = ["home", "about", "career", "home", "cart", "maps", "home", "home", "about", "career"]
    const username = ["ua", "ua", "ua", "ub", "ub", "ub"], timestamp = [1, 2, 3, 4, 5, 6], website = ["a", "b", "a", "a", "b", "c"]

    const output = mostVisitedPattern(username, timestamp, website)
    // console.log('input', username, timestamp, website)
    console.log(`Output =====>`, output)
}
main()