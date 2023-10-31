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

// better solution
var longestCommonPrefix1 = function(strs) {
    let res=''
    for(i=0;i<strs[0].length;i++){
        if(strs.every((str)=> str[i] === strs[0][i])) res += strs[0][i]
        else break;
    }
    return res
    
};



console.log(longestCommonPrefix(strs));
