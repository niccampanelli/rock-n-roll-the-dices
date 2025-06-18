import { Button, Typography } from "@mui/material";
import Icon from "components/icon";

export default function HeaderUser() {

    return (
        <Button
            variant="outlined"
            color="inherit"
            className="rounded-full"
            startIcon={<Icon>account_circle</Icon>}
            endIcon={<Icon>arrow_drop_down</Icon>}
        >
            <Typography variant="intertitulo">
                John Doe
            </Typography>
        </Button>
    )
}