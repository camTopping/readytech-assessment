import { TextField } from "@mui/material";

function LargeTextField(props) {
    return (
        <TextField 
            multiline
            rows={8}
            maxRows={20}
            {...props}
        />
    )
}

export default LargeTextField;