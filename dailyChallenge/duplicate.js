const arr = [1, 3, 2, 4]
const arr2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const dup1 = (nums) => {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(i);
    }
    return false;
}

const dup2 = (nums) => {
    const set = new Set(nums);

    if (set.size !== nums.length) {
        return true;
    }
    return false;
}

const dup3 = (nums) => {

    //create new hashmap with all values in array, dups will be removed
    const withoutDups = new Map(nums.map((i) => [i]));

    if (withoutDups.size !== nums.length) {
        return true;
    }
    return false;
}

console.log(dup3(arr));