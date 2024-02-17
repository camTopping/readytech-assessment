import Form from "./views/Form";
import { ThemeProvider } from "@emotion/react";
import theme from "theme";

function App() {
    return (
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    );
  }
  
  export default App;