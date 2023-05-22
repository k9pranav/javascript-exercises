const repeatString = function(word, times) {
    let toReturn = ''

    if (times == 0){
        return ""

        
    } else if (times < 0){
        return('ERROR')

    } else{
        for (let i = 0; i < times; i++) {
            toReturn += word
        }
    
        return toReturn
    }
};

// Do not edit below this line
module.exports = repeatString;
