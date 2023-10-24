// My solution
var longestCommonPrefix = function(strs) {
    let shortest_text;
    let test = {};
    let result = '';
    for (let element of strs) {
        if (!shortest_text || shortest_text.length > element.length) {
            shortest_text = element;
        }
    }

    for (let i=0; i < shortest_text.length; i++) {
        test[i] = [new RegExp('^' + shortest_text.slice(0, i + 1)), shortest_text.slice(0, i + 1)];
    }

    for (let i=0; i < shortest_text.length; i++) {
        if (strs.every((element) => test[i][0].test(element))) {
            result = test[i][1];
        } else {
            return result;
        }
    }
    return result;
};



console.log(longestCommonPrefix(strs));
