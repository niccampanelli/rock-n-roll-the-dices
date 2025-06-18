import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Login() {

    return (
        <Box
            className="flex flex-col"
            component={"form"}
        >
            <Typography
                variant="titulo"
            >
                Bem-vindo!
            </Typography>
            <Typography
                variant="paragrafo"
                className="mb-6"
            >
                Entre para começar uma nova jornada.
            </Typography>
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
                Entrar
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
                to="/auth/cadastro"
            >
                Cadastre-se
            </Button>
        </Box>
    );
}