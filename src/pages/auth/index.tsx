import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router";

export default function Auth() {

    return (
        <Box className="h-screen">
            <Box className="flex h-full flex-col-reverse md:flex-row">
                <Box className="h-2/3 w-full md:h-full md:w-2/5 overflow-y-auto">
                    <Box className="flex flex-col justify-between min-h-full py-8 px-10">
                        <img
                            className="self-center mb-4"
                            alt="Logo"
                            src="/img/logo.png"
                            width={150}
                            height={150}
                        />
                        <Outlet />
                    </Box>
                </Box>
                <Box className="h-1/3 w-full md:h-full md:w-3/5">
                    <Box
                        className="w-full h-full object-cover"
                        sx={{
                            objectPosition: "50% 20%",
                        }}
                        component={"img"}
                        src="/img/pages/login/banner.png"
                    />
                </Box>
            </Box>
        </Box>
    )
}