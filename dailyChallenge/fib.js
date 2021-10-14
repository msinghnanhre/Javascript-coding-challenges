function fibSum(n) {
    let sum = 0
    if (n <= 2) {
       return 1
    } else {
        return fibSum(n-1)+ fibSum(n-2)
    }
}

console.log(fibSum(7))