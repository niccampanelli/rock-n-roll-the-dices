declare module "@fontsource/*" { }

declare module '@mui/material/styles' {
    interface TypographyVariants {
        destaque: React.CSSProperties;
    }

    // allow configuration using `createTheme()`
    interface TypographyVariantsOptions {
        destaque?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        destaque: true;
    }
}