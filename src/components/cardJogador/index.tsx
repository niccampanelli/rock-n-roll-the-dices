import { Box, Chip, Typography } from "@mui/material";
import Icon from "components/icon";
import { ClassesCores, type CardJogadorProps } from "typesrc/components/cardJogador";

export default function CardJogador({
    nome,
    avatar,
    personagem,
    classe,
    vidas,
    vidasTotal,
    experiencia,
    pontos
}: CardJogadorProps) {

    return (
        <Box className="h-fit w-fit flex flex-row rounded-lg" bgcolor={(theme) => theme.palette.background.paper}>
            <Box
                className="h-32 aspect-square object-cover object-center rounded-l-lg"
                component={"img"}
                src={avatar}
                alt={`${personagem} avatar`}
            />
            <Box className="flex w-fit flex-col p-4">
                <Box className="flex items-center gap-2">
                    <Typography variant="subtitulo" color="text.secondary">
                        {personagem}
                    </Typography>
                    <Chip
                        label={classe}
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
            </Box>
        </Box>
    )
}