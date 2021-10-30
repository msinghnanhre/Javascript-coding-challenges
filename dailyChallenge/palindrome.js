var isPalindrome = function (x) {
    let stringX = x.toString()
    let reverseString = x.toString().split('').reverse().join('')

    if (reverseString === stringX) {
        return true
    }
    return false
};

console.log(isPalindrome(121))