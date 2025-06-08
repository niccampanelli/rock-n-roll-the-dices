import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Icon from "components/icon";
import { useState } from "react";
import { Link, useParams } from "react-router";

export default function Sessao() {

    const { idSessao } = useParams();
    const [trancada, setTrancada] = useState(false);

    return (
        <Box className="w-full flex flex-col gap-2">
            <Box className="flex flex-col gap-2 md:flex-row md:justify-between items-stretch md:items-center">
                <Box className="flex flex-row flex-wrap items-center gap-2">
                    <IconButton
                        size="medium"
                        component={Link}
                        to="/"
                    >
                        <Icon>arrow_back</Icon>
                    </IconButton>
                    <Typography variant="titulo">
                        #{idSessao} Jogo com os amigos
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    startIcon={trancada ? <Icon>lock_open</Icon> : <Icon>lock</Icon>}
                    color={trancada ? "secondary" : "primary"}
                    onClick={() => setTrancada(!trancada)}
                >
                    {trancada ? "Destrancar" : "Trancar"}
                </Button>
            </Box>
            <Box className="flex flex-col md:flex-row gap-4">
                <Box className="w-full md:w-1/4">
                    <Box
                        className="w-full aspect-square object-cover rounded-lg mb-4"
                        sx={{
                            objectPosition: "50% 20%",
                        }}
                        component={"img"}
                        src="/img/pages/login/banner.png"
                    />
                    <Box className="flex flex-col gap-2">
                        <Typography variant="subtitulo">
                            História
                        </Typography>
                        <TextField
                            variant="filled"
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Descreva a história da sessão..."
                        />
                    </Box>
                </Box>
                <Box className="w-full md:w-3/4">
                    <Typography variant="subtitulo">
                        Detalhes da sessão {idSessao}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}