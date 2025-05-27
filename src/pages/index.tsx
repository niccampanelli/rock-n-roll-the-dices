import { Autocomplete, Button, Card, Chip, TextField, Typography } from "@mui/material";

export default function Inicio() {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "center",
            }}>
                <Card sx={{ padding: 2, backgroundColor: "background.paper", borderRadius: 2 }}>
                    <Typography color="textSecondary" variant="titulo" align="center" gutterBottom>
                        Bem-vindo ao Meu App
                    </Typography>
                    <Chip label="Exemplo de Chip" color="info" sx={{ marginBottom: 2 }} />
                </Card>
            </div>
        </div>
    )
}