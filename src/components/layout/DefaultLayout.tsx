import { Box } from "@mui/material";
import Header from "components/header";
import { Outlet } from "react-router";

export default function DefaultLayout() {

    return (
        <Box className="w-full flex flex-col gap-4 py-8 px-10">
            <Header />
            <Outlet />
        </Box>
    )
}