import TextField from '@mui/material/TextField';
import { Divider, Typography, Container } from '@mui/material';

function PersonalDetails() {
    return (
        <Container>
            <Typography variant="h3">Personal details</Typography>
            <TextField 
                id="first-name"
                label="First name" 
                variant="outlined"     
            />
            <TextField 
                id="middle-name"
                label="Middle name"
                variant="outlined"     
            />
            <TextField 
                id="last-name"
                label="Last name"
                variant="outlined"     
            />
            <Divider variant='middle' />
            <TextField 
                id="email" 
                label="Email" 
                placeholder="email@email.com"
                variant="outlined"     
            />
            <TextField 
                id="Age" 
                label="Age" 
                placeholder='Enter a number'
                variant="outlined"     
            />
        </Container>
    )
}

export default PersonalDetails;