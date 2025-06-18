import { Box, Button, Card, Chip, TextField, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Inicio() {

    return (
        <Box className="flex flex-col items-center h-full">
            <Box className="flex flex-col w-full md:max-w-md">
                <Box className="flex flex-col mb-14">
                    <Typography variant="titulo">
                        Como deseja começar?
                    </Typography>
                    <Typography variant="paragrafo" className="mb-6">
                        Digite o código de uma sessão.
                    </Typography>
                    <Box className="flex flex-col gap-4 mb-2">
                        <TextField
                            variant="filled"
                            placeholder="Código da sessão"
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className="w-full"
                            component={Link}
                            to="/sessao/12345"
                        >
                            Entrar em uma sessão
                        </Button>
                    </Box>
                    <Typography
                        variant="subtitulo"
                        className="mb-2"
                    >
                        Ou
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        className="w-full"
                        component={Link}
                        to="/sessao/novo"
                    >
                        Seja o mestre de uma nova sessão
                    </Button>
                </Box>
                <Box className="flex flex-col">
                    <Typography variant="titulo">
                        Sessões criadas
                    </Typography>
                    <Typography variant="paragrafo" className="mb-6">
                        Sessões nas quais você jogou ou foi mestre.
                    </Typography>
                    <Box className="flex flex-col gap-4">
                        <Card className="flex flex-col p-4">
                            <Box className="flex flex-row items-center justify-between">
                                <Typography variant="subtitulo" color="text.secondary">
                                    #12345 Jogo com os amigos
                                </Typography>
                                <Chip
                                    label="Mestre"
                                    color="primary"
                                    size="small"
                                />
                            </Box>
                            <Typography variant="paragrafo" color="text.secondary" className="mb-2">
                                Astros do rock embarcam em uma missão para recuperar a lendária...
                            </Typography>
                            <Typography variant="legenda" color="text.secondary">
                                Jogado pela última vez em 01/01/2023
                            </Typography>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}