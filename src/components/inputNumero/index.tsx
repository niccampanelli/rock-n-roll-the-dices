import { Box, IconButton, InputBase, TextField } from "@mui/material";
import Icon from "components/icon";
import type { InputNumeroProps } from "typesrc/components/inputNumero";

export default function InputNumero({
    value,
    onChange,
    className = ""
}: InputNumeroProps) {

    return (
        <Box className={`w-full flex flex-row items-center gap-2 ${className}`}>
            <IconButton
                size="large"
                className="rounded-lg"
                onClick={() => onChange(value - 1)}
            >
                <Icon>remove</Icon>
            </IconButton>
            <TextField
                variant="filled"
                size="small"
                className="w-full"
                value={value}
                onChange={(e) => onChange(Number(e.target.value) || 0)}
            />
            <IconButton
                size="large"
                className="rounded-lg"
                onClick={() => onChange(value + 1)}
            >
                <Icon>add</Icon>
            </IconButton>
        </Box>
    )
}