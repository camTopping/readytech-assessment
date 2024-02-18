import { Container, Typography } from "@mui/material";

function FormHeader(props) {
    return (
        <Container {...props}>
            <Typography variant='h1' color="text.primary">
                Form Title
            </Typography>
            <Typography color="text.secondary">
                Form descriptions
            </Typography>
        </Container>
    )
}

export default FormHeader;