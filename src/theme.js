import { green } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat', 
        ].join(','),
        h1: { 
            fontSize: '2rem', 
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.5rem', 
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.25rem', 
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.2rem', 
            fontWeight: 600,
        },
        h5: {
            fontSize: '1.1rem', 
            fontWeight: 600,
        },
        h6: {
            fontSize: '1rem', 
            fontWeight: 600,
        },
    },
    palette: {
        primary: green,
        background: {
            default: '#595959', // Set your desired background color here
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    background: 'white',
                    flexDirection: 'column', 
                    gap: '24px',
                    padding: '12px',
                    paddingTop: '24px',
                    paddingBottom: '24px',
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
                    background: 'white'
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
                        '&:disabled': {
                            color: 'white',
                        }
                    }
                }
            ]
        }
    }
});

export default theme;