import { Divider, Typography, Container, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import validate_email from '../validators/validate_email';
import validate_name from '../validators/validate_name';
import validate_integer from '../validators/validate_integer';
import validate_age from '../validators/validate_age';

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
        // Check valid name
        if(!validate_name(name)) return setError({...error, [id]: 'Please use 50 characters or less.'})
        return setError({...error, [id]: ''});        
    }

    // Email must be valid
    const validateEmail = (id, email) => {
        // Catch empty input 
        if(email==='') return setError({...error, [id]: ''});

        // Check valid email
        if(!validate_email(email)) return setError({...error, [id]: 'Please enter a valid email address.'})
        return setError({...error, [id]: ''})
    }

    // Age must be an integer between 18 and 100
    const validateAge = (id, age) => {
        // Catch empty input 
        if(age==='') return setError({...error, [id]: ''});
        
        // Check if provided input is integer
        if(!validate_integer(age)) return setError({...error, [id]: 'Age must be an integer.'}) 
        if(!validate_age(age)) return setError({...error, [id]: 'You must be between the ages of 18 and 100.'})
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