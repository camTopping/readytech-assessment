import { Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import LargeTextField from "components/LargeTextField";

function StudyingDetails(props) {
    const {values, onChange, ...rest} = props;

    // Define handle function for onChange
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log((name, value));
        // Only change the input being updated
        onChange({...values, [name]: value});
    }

    return (
        <Container {...rest}>
            <Typography variant="h3">Are you currently studying?</Typography>
            <FormControl id='studying'>
                <RadioGroup onChange={handleChange}>
                    <FormControlLabel name='studying' value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel name='studying' value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            {
                values.studying=="yes" &&
                <>
                    <Typography variant="h4">Please provide the name(s) of what you are studying</Typography>
                    <LargeTextField
                        id='studydetails'
                        name='studydetails'
                        label="Study details"
                        placeholder="Detail your study here"
                        onChange={handleChange}
                        value={values.studydetails}
                    />
                </>
            }
        </Container>
    )
}

export default StudyingDetails;