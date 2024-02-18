function validate_name(name){
    /**
     *  validate_name checks if the provided name is below a 50 character limit 
     * @param {[str]} name a string representing the name
    */
    if(name.length > 50 ) return false
    return true
}

export default validate_name;