import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import CardJogador from "components/cardJogador";
import Icon from "components/icon";
import { useState } from "react";
import { Link, useParams } from "react-router";

export default function Sessao() {

    const { idSessao } = useParams();
    const [trancada, setTrancada] = useState(false);
    const [história, setHistória] = useState("Astros do rock embarcam em uma missão para recuperar a lendária Gema da Harmonia, enfrentando criaturas mitológicas e desvendando segredos ancestrais em uma história digna de uma balada imortal!");

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
                        className="w-full aspect-square object-cover object-center rounded-lg mb-4"
                        component={"img"}
                        src="/img/pages/sessao/banner.png"
                    />
                    <Box className="flex flex-col gap-2">
                        <Typography variant="subtitulo">
                            História
                        </Typography>
                        <TextField
                            variant="filled"
                            disabled={trancada}
                            fullWidth
                            multiline
                            rows={6}
                            placeholder="Descreva a história da sessão..."
                            value={história}
                            onChange={(e) => setHistória(e.target.value)}
                        />
                    </Box>
                </Box>
                <Box className="flex flex-col md:inline wrap-normal gap-4 w-full md:w-3/4">
                    <CardJogador
                        nome="ROD"
                        avatar="/img/pages/sessao/snake.png"
                        personagem="Snake"
                        classe="guerreiro"
                        vidas={8}
                        vidasTotal={20}
                        experiencia={13578}
                        pontos={125}
                    />
                    <CardJogador
                        nome="Maria"
                        avatar="/img/pages/sessao/blaze.png"
                        personagem="Oz de Ousborne"
                        classe="guerreiro"
                        vidas={15}
                        vidasTotal={20}
                        experiencia={10234}
                        pontos={200}
                    />
                    <CardJogador
                        nome="Maria"
                        avatar="/img/pages/sessao/blaze.png"
                        personagem="Blaze of Glory"
                        classe="guerreiro"
                        vidas={15}
                        vidasTotal={20}
                        experiencia={10234}
                        pontos={200}
                    />
                </Box>
            </Box>
        </Box>
    )
}