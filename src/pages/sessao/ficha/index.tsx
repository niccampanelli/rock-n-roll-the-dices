import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";

export default function Ficha() {

    const { idFicha } = useParams();

    return (
        <Box>
            <Typography variant="titulo">
                Ficha { idFicha }
            </Typography>
        </Box>
    )
}