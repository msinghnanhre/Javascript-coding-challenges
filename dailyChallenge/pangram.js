let str1 = "We promptly judged antique ivory buckles for the prize";
let str2 = "We promptly judged antique ivory buckles for the prize";
let str3 = "The quick brown fox jumped over the lazy dog"

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
    
    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return "not pangram";
        }
    }

    return "pangram";
}

console.log(pangrams(str2))