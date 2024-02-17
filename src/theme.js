import { green } from '@mui/material/colors'
const { createTheme } = require("@mui/material");

const theme = createTheme({
    palette: {
        primary: green
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column', 
                    gap: '24px',
                    padding: '12px',
                    boxShadow: '10px 1px 5px 1px lightgrey',
                    borderRadius: '4px'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '100%',
                    border: '1px solid', 
                    borderRadius: '4px',
                }
            },
            variants: [
                {
                    props: {variant: 'filled'},
                    style: {
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkgreen', // Change this to your desired hover color
                        },
                    }
                }
            ]
        }
    }
});

export default theme;