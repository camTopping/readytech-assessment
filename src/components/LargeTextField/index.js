import { TextField } from "@mui/material";

function LargeTextField(props) {
    return (
        <TextField 
            multiline
            rows={8}
            {...props}
        />
    )
}

export default LargeTextField;