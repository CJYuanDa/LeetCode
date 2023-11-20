let numRows = 5;

function generate(rowIndex) {
    let result = [];
    let level1 = [1];
    result.push(level1);
    while (result.length < rowIndex + 1) {
        let level = [];
        if (rowIndex + 1 > 2) {
            let last = result[result.length - 1];
            for (let i=0; i < result.length - 1; i++) {
                level.push(last[i] + last[i + 1]);
            }
        }
        level.unshift(1);
        level.push(1);
        result.push(level);
    }
    return result[rowIndex];
}

console.log(generate(3));

// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]