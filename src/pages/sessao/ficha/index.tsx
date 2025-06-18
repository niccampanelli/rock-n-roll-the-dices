import { Autocomplete, Box, Chip, IconButton, TextField, Typography } from "@mui/material";
import Icon from "components/icon";
import InputNumero from "components/inputNumero";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { ClassesCores } from "typesrc/components/cardJogador";
import { FichaClasseLabels, type FichaDto } from "typesrc/dtos/ficha/ficha.dto";

export default function Ficha() {

    const { idSessao } = useParams();
    const { ficha } = useLoaderData<{ ficha: FichaDto }>();

    const [itens, setItens] = useState<string[]>(ficha.itens || []);
    const [itensValue, setItensValue] = useState("");

    const [historia, setHistoria] = useState(ficha.historia || "");

    const [forca, setForca] = useState(ficha.forca || 0);
    const [habilidade, setHabilidade] = useState(ficha.habilidade || 0);
    const [resistencia, setResistencia] = useState(ficha.resistencia || 0);
    const [armadura, setArmadura] = useState(ficha.armadura || 0);
    const [poder, setPoder] = useState(ficha.poder || 0);

    const [golpes, setGolpes] = useState<string[]>(ficha.golpes || []);
    const [golpesValue, setGolpesValue] = useState("");

    const [tiposDano, setTiposDano] = useState<string[]>(ficha.tiposDano || []);
    const [tiposDanoValue, setTiposDanoValue] = useState("");

    return (
        <Box className="w-full flex flex-col gap-2">
            <Box className="flex flex-col gap-2 md:flex-row md:justify-between items-stretch md:items-center">
                <Box className="flex flex-row flex-wrap items-center gap-2">
                    <IconButton
                        size="medium"
                        component={Link}
                        to={`/sessao/${idSessao}`}
                    >
                        <Icon>arrow_back</Icon>
                    </IconButton>
                    <Typography variant="titulo">
                        {ficha.personagem}
                    </Typography>
                    <Chip
                        label={FichaClasseLabels[ficha.classe]}
                        size="small"
                        color={ClassesCores[ficha.classe]}
                        className="capitalize"
                    />
                </Box>
                <Chip
                    label={`${ficha.pontos} Pontos`}
                    size="medium"
                    color="secondary"
                    className="capitalize"
                />
            </Box>
            <Box className="flex flex-col md:flex-row gap-4">
                <Box className="w-full md:w-1/4">
                    <Typography variant="subtitulo" className="mb-2">
                        {ficha.nome}
                    </Typography>
                    <Box
                        className="w-full aspect-square object-cover object-center rounded-lg mb-4"
                        component={"img"}
                        src={ficha.avatar}
                    />
                    <Box className="flex flex-row gap-2">
                        <Chip
                            icon={<Icon className="text-md!">favorite</Icon>}
                            label={`${ficha.vidas}/${ficha.vidasTotal}`}
                            size="medium"
                            color="red"
                            className="w-full justify-start rounded-md"
                        />
                        <Chip
                            icon={<Icon className="text-md!">star_shine</Icon>}
                            label={ficha.magia}
                            size="medium"
                            color="purple"
                            className="w-full justify-start rounded-md"
                        />
                        <Chip
                            icon={<Icon className="text-md!">star</Icon>}
                            label={ficha.experiencia}
                            size="medium"
                            color="gold"
                            className="w-full justify-start rounded-md"
                        />
                    </Box>
                </Box>
                <Box className="w-full md:w-3/4 flex flex-col gap-4">
                    <Box className="flex flex-col gap-2">
                        <Typography variant="subtitulo">
                            Itens
                        </Typography>
                        <Autocomplete
                            multiple
                            freeSolo
                            options={[]}
                            value={itens}
                            inputValue={itensValue}
                            onChange={(event, newValue) => {
                                setItens(newValue);
                            }}
                            onInputChange={(event, newInputValue) => {
                                const options = newInputValue.split(",");

                                if (options.length > 1) {
                                    setItens(
                                        itens
                                            .concat(options)
                                            .map(x => x.trim())
                                            .filter(x => x)
                                    );
                                } else {
                                    setItensValue(newInputValue);
                                }
                            }}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    variant="filled"
                                    fullWidth
                                    placeholder="Adicione um item..."
                                />
                            )}
                            renderValue={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip
                                        label={option}
                                        color="primary"
                                        {...getTagProps({ index })}
                                        key={index}
                                    />
                                ))
                            }
                        />
                    </Box>
                    <Box className="flex flex-col gap-2">
                        <Typography variant="subtitulo">
                            História
                        </Typography>
                        <TextField
                            variant="filled"
                            fullWidth
                            multiline
                            rows={2}
                            placeholder="Descreva a história do personagem..."
                            value={ficha.historia}
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </Box>
                    <Box className="flex flex-col md:flex-row gap-2">
                        <Box className="flex flex-col gap-2 w-full md:w-1/3">
                            <Box className="flex flex-row gap-2">
                                <Typography variant="subtitulo" className="w-2/3">
                                    Força
                                </Typography>
                                <InputNumero
                                    className="w-1/3"
                                    value={forca}
                                    onChange={setForca}
                                />
                            </Box>
                            <Box className="flex flex-row gap-2">
                                <Typography variant="subtitulo" className="w-2/3">
                                    Habilidade
                                </Typography>
                                <InputNumero
                                    className="w-1/3"
                                    value={habilidade}
                                    onChange={setHabilidade}
                                />
                            </Box>
                            <Box className="flex flex-row gap-2">
                                <Typography variant="subtitulo" className="w-2/3">
                                    Resistência
                                </Typography>
                                <InputNumero
                                    className="w-1/3"
                                    value={resistencia}
                                    onChange={setResistencia}
                                />
                            </Box>
                            <Box className="flex flex-row gap-2">
                                <Typography variant="subtitulo" className="w-2/3">
                                    Armadura
                                </Typography>
                                <InputNumero
                                    className="w-1/3"
                                    value={armadura}
                                    onChange={setArmadura}
                                />
                            </Box>
                            <Box className="flex flex-row gap-2">
                                <Typography variant="subtitulo" className="w-2/3">
                                    Poder
                                </Typography>
                                <InputNumero
                                    className="w-1/3"
                                    value={poder}
                                    onChange={setPoder}
                                />
                            </Box>
                        </Box>
                        <Box className="flex flex-col gap-2 w-full md:w-2/3">
                            <Box className="flex flex-col gap-2">
                                <Typography variant="subtitulo">
                                    Golpes conhecidos
                                </Typography>
                                <Autocomplete
                                    multiple
                                    freeSolo
                                    options={[]}
                                    value={golpes}
                                    inputValue={golpesValue}
                                    onChange={(event, newValue) => {
                                        setGolpes(newValue);
                                    }}
                                    onInputChange={(event, newInputValue) => {
                                        const options = newInputValue.split(",");

                                        if (options.length > 1) {
                                            setGolpes(
                                                golpes
                                                    .concat(options)
                                                    .map(x => x.trim())
                                                    .filter(x => x)
                                            );
                                        } else {
                                            setGolpesValue(newInputValue);
                                        }
                                    }}
                                    renderInput={params => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            fullWidth
                                            placeholder="Adicione um golpe..."
                                        />
                                    )}
                                    renderValue={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                label={option}
                                                color="primary"
                                                {...getTagProps({ index })}
                                                key={index}
                                            />
                                        ))
                                    }
                                />
                            </Box>
                            <Box className="flex flex-col gap-2">
                                <Typography variant="subtitulo">
                                    Tipos de dano
                                </Typography>
                                <Autocomplete
                                    multiple
                                    freeSolo
                                    options={[]}
                                    value={tiposDano}
                                    inputValue={tiposDanoValue}
                                    onChange={(event, newValue) => {
                                        setTiposDano(newValue);
                                    }}
                                    onInputChange={(event, newInputValue) => {
                                        const options = newInputValue.split(",");

                                        if (options.length > 1) {
                                            setTiposDano(
                                                tiposDano
                                                    .concat(options)
                                                    .map(x => x.trim())
                                                    .filter(x => x)
                                            );
                                        } else {
                                            setTiposDanoValue(newInputValue);
                                        }
                                    }}
                                    renderInput={params => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            fullWidth
                                            placeholder="Adicione um golpe..."
                                        />
                                    )}
                                    renderValue={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                label={option}
                                                color="primary"
                                                {...getTagProps({ index })}
                                                key={index}
                                            />
                                        ))
                                    }
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}