// FUNCTIONS
function add(a,b){
    return a+b
}

function companyName(a){
    return a
}

function age(a){
    if (a >= 18){
        return "Adult"
    } else {
        return "Minor"
    }
}

// EXPORT ADD FUNCTION
module.exports = { add, companyName, age }