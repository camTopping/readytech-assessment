import validate_integer from "./validate_integer"

function validate_age(age){
    /**
     * validate_age checks if the provided age is an between 18 and 100 inclusive.
     * @param {[str]} age a string representing the age
    */
    // Age must be a valid integer
    if(!validate_integer(age)) return false

    // Age must be between 18 and 100
    if(age < 18 || age > 100) return false
    return true
}

export default validate_age;