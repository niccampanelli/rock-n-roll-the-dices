import { Box, Typography } from "@mui/material";
import HeaderUser from "./user";

export default function Header() {

    return (
        <Box component={"header"} className="w-full flex justify-between">
            <Typography variant="subtitulo">
                Rock n' Roll The Dices
            </Typography>
            <HeaderUser />
        </Box>
    )
}