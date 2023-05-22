const palindromes = function (sentence) {
    let new_sent = sentence.toLowerCase().replace(/[^a-z]/g, "");;
    if (new_sent == new_sent.split("").reverse().join("")){
        return true
    } else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
