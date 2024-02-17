import { Container, Typography } from "@mui/material";
import LargeTextField from "components/LargeTextField";

function ExtraInformation (props) {
    const {value, onChange, ...rest} = props;
    
    return(
        <Container {...rest}>
            <Typography variant="h3">Extra Information</Typography>
            <LargeTextField 
                label="Extra information"
                placeholder="Enter any additional information here"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </Container>
    )
}

export default ExtraInformation;