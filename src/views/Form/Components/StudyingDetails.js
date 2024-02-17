import { Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import LargeTextField from "components/LargeTextField";

function StudyingDetails(props) {
    const {values, onChange, ...rest} = props;
    return (
        <Container {...rest}>
            <Typography variant="h3">Are you currently studying?</Typography>
            <FormControl id='studying'>
                <RadioGroup>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <Typography variant="h4">Please provide the name(s) of what you are studying</Typography>
            <LargeTextField
                id='study-details'
                label="Study details"
                placeholder="Detail your study here"
            />
        </Container>
    )
}

export default StudyingDetails;