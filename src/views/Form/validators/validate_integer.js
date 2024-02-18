function validate_integer(str){
    /**
     *  validate_integer checks if the provided string is valid integer.  
     * @param {[str]} str a string representing the integer
    */
    if(isNaN(str) || !Number.isInteger(parseFloat(str)) || str.includes('.')) return false
    return true
}

export default validate_integer;