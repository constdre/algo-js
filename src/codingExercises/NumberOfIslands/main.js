var main = () => {
    const dataset1 = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ]
    const dataset2 = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ]
    const dataset3 = [
        ["1", "1", "1"],
        ["0", "1", "0"],
        ["1", "1", "1"]
    ]
    const dataset4 = [
        ["1", "0", "1", "1", "1"],
        ["1", "0", "1", "0", "1"],
        ["1", "1", "1", "0", "1"]
    ]
    const numOfIslands = numIslands(dataset4)
    console.log('numIslands', numOfIslands)
}
main()
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    let countIslands = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j]
            if (cell === '0')
                continue
            countIslands++
            preorderDFS(grid, i, j)
        }
    }
    return countIslands
};

function preorderDFS(grid, rowIndex, colIndex) {
    const node = grid[rowIndex][colIndex]
    const canGoDown = grid[rowIndex + 1]
    const canGoLeft = grid[rowIndex][colIndex - 1]
    const canGoRight = grid[rowIndex][colIndex + 1]
    const canGoUp = grid[rowIndex - 1]
    if (node === '0') return
    // Transform current to 0 to mark it as visited
    grid[rowIndex][colIndex] = '0'
    canGoDown && preorderDFS(grid, rowIndex + 1, colIndex)
    canGoLeft && preorderDFS(grid, rowIndex, colIndex - 1)
    canGoRight && preorderDFS(grid, rowIndex, colIndex + 1)
    canGoUp && preorderDFS(grid, rowIndex - 1, colIndex)
}
