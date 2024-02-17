import { Container, Typography } from "@mui/material";

function FormHeader() {
    return (
        <Container>
            <Typography variant='h1' color="text.primary">
                Form Title
            </Typography>
            <Typography variant='h2' color="text.secondary">
                Form descriptions
            </Typography>
        </Container>
    )
}

export default FormHeader;