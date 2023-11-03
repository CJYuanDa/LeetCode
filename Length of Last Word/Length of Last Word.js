// let s = "Hello World";
let s = "   fly me   to   the moon  ";
// let s = "luffy is still joyboy";

// My solution
function lengthOfLastWord(s) {
    s = s.trim().split(/\s+/);
    return (s[s.length - 1]).length;
}

console.log(lengthOfLastWord(s));