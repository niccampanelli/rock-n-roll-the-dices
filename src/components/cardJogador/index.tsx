import { Card, CardMedia, CardContent, CardActionArea, Box, Chip, Typography, Button } from "@mui/material";
import Icon from "components/icon";
import { Link } from "react-router";
import { ClassesCores, type CardJogadorProps } from "typesrc/components/cardJogador";
import { FichaClasseLabels } from "typesrc/dtos/ficha/ficha.dto";

export default function CardJogador({
    nome,
    avatar,
    personagem,
    classe,
    vidas,
    vidasTotal,
    experiencia,
    pontos,
    link
}: CardJogadorProps) {

    return (
        <Card
            className="w-full flex flex-row rounded-lg"
        >
            <CardActionArea
                className="flex justify-start"
                component={link ? Link : "div"}
                to={link}
            >
                <CardMedia
                    className="w-32 h-auto"
                    component="img"
                    image={avatar}
                    alt={personagem}
                />
                <CardContent className="flex w-fit flex-col p-4">
                    <Box className="flex items-center gap-2">
                        <Typography variant="subtitulo" color="text.secondary">
                            {personagem}
                        </Typography>
                        <Chip
                            label={FichaClasseLabels[classe]}
                            size="small"
                            color={ClassesCores[classe]}
                            className="capitalize"
                        />
                    </Box>
                    <Typography className="mb-2" variant="intertitulo" color="text.secondary">
                        {nome}
                    </Typography>
                    <Box className="flex flex-row items-center gap-2">
                        <Chip
                            icon={<Icon className="text-sm!">favorite</Icon>}
                            label={`${vidas}/${vidasTotal}`}
                            size="small"
                            color="red"
                            className="rounded-md"
                        />
                        <Chip
                            icon={<Icon className="text-sm!">star_shine</Icon>}
                            label={experiencia}
                            size="small"
                            color="purple"
                            className="rounded-md"
                        />
                        <Chip
                            icon={<Icon className="text-sm!">attach_money</Icon>}
                            label={`${pontos} pts`}
                            size="small"
                            color="gold"
                            className="rounded-md"
                        />
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}