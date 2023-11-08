let n = 3;

// solution 1
function climbStairs(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let step = 3, pace1 = 1, pace2 = 2;
    while (step <= n) {
        let result = pace1 + pace2;
        pace1 = pace2;
        pace2 = result;
        step++;
    }
    return pace2;
}

// solution 2
function climbStairs2(n) {
    let oneStep = 1;
    let twoSteps = 2;

    for(let current = 3; current <= n; current++){
        let currentWays = oneStep + twoSteps;
        oneStep = twoSteps;
        twoSteps = currentWays;
    }
}

console.log(climbStairs(n));