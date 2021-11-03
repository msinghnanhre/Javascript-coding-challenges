const strs = ["flowers", "flow", "flight"]

const findPrefix = (strs) => {

    let prefix = ""

    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(e => e[i] === strs[0][i])) {
            prefix += strs[0][i]
        } else return prefix
    }
    return prefix
}

console.log(findPrefix(strs))