function validate_email(email) {
    /**
     * validate_email will ensure the provided email is valid.
     * @param {[str]} email a string representing email address
    */

    // Use regex for validating email address
    const pattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(!pattern.test(email)) return false
    return true
}

export default validate_email;