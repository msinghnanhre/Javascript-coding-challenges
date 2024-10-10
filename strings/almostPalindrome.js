

//in this solution we learn that sometimes its easier to 
//solve a problem by breaking it into subproblems

const almostPanlindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if(str[left] !== str[right]) {
            return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1);
        }

        left++;
        right--;
    }
    return true;
}

const isPalindrome = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

