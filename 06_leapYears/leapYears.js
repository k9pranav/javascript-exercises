const leapYears = function(years) {
    
    if (years%4 == 0){
        if (years%400 != 0 && years%100 == 0){
            return false
        }

        else {
            return true
        }

    } 

    else{
        return false
    }
   
    }

// Do not edit below this line
module.exports = leapYears;
