import { Container, Typography } from "@mui/material";
import LargeTextField from "components/LargeTextField";

function ExtraInformation () {
    return(
        <Container>
            <Typography variant="h3">Extra Information</Typography>
            <LargeTextField 
                label="Extra information"
                placeholder="Enter any additional information here"
            />
        </Container>
    )
}

export default ExtraInformation;