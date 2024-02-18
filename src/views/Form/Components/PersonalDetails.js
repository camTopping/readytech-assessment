import { Divider, Typography, Container, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

function PersonalDetails(props) {
    const {values, onChange, isError, ...rest} = props;

    // Define states for error feedback 
    const [error, setError] = useState({firstname: '', middlename: '', lastname: '', email: '', age: ''});

    // Watch for changes on error for parent 
    useEffect(() => {
        if(Object.values(error).some(val => !!val)){
            return isError(true);
        }
        return isError(false);
    }, [error]);

    // Names must be under 50 characters
    const validateName = (id, name) => {
        if(name.length > 50 ) return setError({...error, [id]: 'Please use 50 characters or less.'})
        return setError({...error, [id]: ''});
    }

    // Must be a valid email address
    const validateEmail = (id, email) => {
        // Catch empty input 
        if(email==='') return setError({...error, [id]: ''});
        // Use regex for validating email address
        const pattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!pattern.test(email)) return setError({...error, [id]: 'Please enter a valid email address.'})
        return setError({...error, [id]: ''})
    }

    // Age must be an integer between 18 and 100
    const validateAge = (id, age) => {
        // Catch empty input 
        if(age==='') return setError({...error, [id]: ''});
        // Age must be a valid integer
        if(isNaN(age) || !Number.isInteger(parseFloat(age)) || age.includes('.')) return setError({...error, [id]: 'Age must be an integer.'}) 
        // Age must be between 18 and 100
        if(age < 18 || age > 100) return setError({...error, [id]: 'You must be between the ages of 18 and 100.'})
        return setError({...error, [id]: ''});
    }

    // Define handle function for onChange
    const handleChange = (e, validator) => {
        const {id, value} = e.target;
        // Only change the input being updated
        onChange({...values, [id]: value});
        validator(id, value);
    }

    return (
        <Container {...rest}>
            <Typography variant="h3">Personal details</Typography>
            <TextField
                id="firstname"
                label="First name" 
                variant="outlined"
                value={values.firstname}
                onChange={e => handleChange(e, validateName)}
                error={Boolean(error.firstname)}
                helperText={error.firstname}
                required
            />
            <TextField 
                id="middlename"
                label="Middle name"
                variant="outlined"     
                value={values.middlename}
                onChange={e => handleChange(e, validateName)}
                error={Boolean(error.middlename)}
                helperText={error.middlename ? error.middlename : 'Optional'}
            />
            <TextField 
                id="lastname"
                label="Last name"
                variant="outlined"     
                value={values.lastname}
                onChange={e => handleChange(e, validateName)}
                error={Boolean(error.lastname)}
                helperText={error.lastname}
                required
            />
            <Divider variant='middle' />
            <TextField 
                id="email" 
                label="Email" 
                placeholder="email@email.com"
                variant="outlined"
                value={values.email}
                onChange={e => handleChange(e, validateEmail)}
                error={Boolean(error.email)}
                helperText={error.email}
                required
            />
            <TextField 
                id="age" 
                label="Age" 
                placeholder='Enter a number'
                variant="outlined" 
                value={values.age}
                onChange={e => handleChange(e, validateAge)}
                error={Boolean(error.age)}
                helperText={error.age}
                required
            />
        </Container>
    )
}

export default PersonalDetails;