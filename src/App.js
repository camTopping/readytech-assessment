import Form from "./views/Form";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from '@mui/material/';
import theme from "theme";

function App() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Form />
      </ThemeProvider>
    );
  }
  
  export default App;