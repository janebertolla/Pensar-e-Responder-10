import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import { createTheme } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#1de9b6',
      },
      secondary: {
        main: '#b3e5fc',
      },
    },
  }
)





function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <ListarTarefa />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;