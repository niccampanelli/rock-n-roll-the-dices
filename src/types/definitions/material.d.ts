import "@mui/material"

declare module '@mui/material/styles' {
    interface Pallete {
        purple: Pallete['primary'];
        red: Pallete['primary'];
        gold: Pallete['primary'];
    }

    interface PaletteOptions {
        purple?: PaletteOptions['primary'];
        red?: PaletteOptions['primary'];
        gold?: PaletteOptions['primary'];
    }

    interface TypographyVariants {
        titulo: React.CSSProperties;
        subtitulo: React.CSSProperties;
        intertitulo: React.CSSProperties;
        paragrafo: React.CSSProperties;
        legenda: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        titulo?: React.CSSProperties;
        subtitulo?: React.CSSProperties;
        intertitulo?: React.CSSProperties;
        paragrafo?: React.CSSProperties;
        legenda?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        titulo: true;
        subtitulo: true;
        intertitulo: true;
        paragrafo: true;
        legenda: true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        purple: true;
        red: true;
        gold: true;
    }
}