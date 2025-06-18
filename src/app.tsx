import { CssBaseline, GlobalStyles, StyledEngineProvider, ThemeProvider } from "@mui/material";
import moment from "moment";
import routes from "pages/routes";
import { RouterProvider } from "react-router";
import theme from "./theme";

export default function App() {

    moment.locale('pt-br');

    return (
        <StyledEngineProvider enableCssLayer>
            <ThemeProvider theme={theme}>
                <GlobalStyles styles="@layer theme, base, mui, components;" />
                <CssBaseline />
                <RouterProvider router={routes} />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}