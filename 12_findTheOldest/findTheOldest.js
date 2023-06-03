var currentYear = new Date().getFullYear()

function getAge(arrayComp){
    if (!arrayComp.yearOfDeath){
        return currentYear - arrayComp.yearOfBirth
    } else{
        return arrayComp.yearOfDeath - arrayComp.yearOfBirth
    }
}

const findTheOldest = function(array) {
    const sorted = array.sort(function(a, b) {
        const lastAge = getAge(a)
        const currentAge = getAge(b)
        return lastAge > currentAge ? -1 : 1
    });

    return sorted[0]
}


// Do not edit below this line
module.exports = findTheOldest;
