import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Cadastro() {

    return (
        <Box
            className="flex flex-col"
            component={"form"}
        >
            <Typography
                variant="titulo"
            >
                Cadastre-se
            </Typography>
            <Typography
                variant="paragrafo"
                className="mb-6"
            >
                Conte-nos quem você é.
            </Typography>
            <TextField
                className="mb-2"
                variant="filled"
                placeholder="Nome"
                required
            />
            <TextField
                className="mb-2"
                variant="filled"
                placeholder="E-mail"
                type="email"
                required
            />
            <TextField
                className="mb-4"
                variant="filled"
                placeholder="Senha"
                required
            />
            <Button
                className="mb-4"
                variant="contained"
                color="primary"
                component={Link}
                to="/"
            >
                Cadastrar
            </Button>
            <Typography
                variant="subtitulo"
                className="mb-2"
            >
                Ou
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/auth/login"
            >
                Entre
            </Button>
        </Box>
    );
}