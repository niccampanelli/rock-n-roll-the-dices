import { ThemeProvider } from "@mui/material";
import moment from "moment";
import routes from "pages/routes";
import { RouterProvider } from "react-router";
import theme from "./theme";

export default function App() {

    moment.locale('pt-br');

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
    )
}