import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#226F54",
            contrastText: "#FFFAE9"
        },
        secondary: {
            main: "#59656F",
            contrastText: "#FFFAE9"
        },
        purple: {
            main: "#942192",
            contrastText: "#FFFAE9"
        },
        red: {
            main: "#E31D1D",
            contrastText: "#FFFAE9"
        },
        gold: {
            main: "#FFBB01",
            contrastText: "#070924"
        },
        background: {
            default: "#070924",
            paper: "#FFFAE9"
        },
        text: {
            primary: "#FFFAE9",
            secondary: "#070924"
        },
        info: {
            main: "#2A2B3C",
            contrastText: "#FFFAE9"
        }
    },
    typography: {
        titulo: {
            fontFamily: "Germania One, serif",
            fontWeight: 400,
            fontSize: "3rem"
        },
        subtitulo: {
            fontFamily: "Germania One, serif",
            fontWeight: 400,
            fontSize: "1.5rem"
        },
        intertitulo: {
            fontFamily: "Germania One, serif",
            fontWeight: 400,
            fontSize: "0.875rem"
        },
        paragrafo: {
            fontFamily: "Oregano, cursive",
            fontWeight: 400,
            fontSize: "1.5rem"
        },
        legenda: {
            fontFamily: "Oregano, cursive",
            fontWeight: 400,
            fontSize: "1rem"
        },
        button: {
            fontFamily: "Germania One, serif",
            fontWeight: 400,
            fontSize: "1.5rem",
            textTransform: "none"
        }
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "& .MuiAutocomplete-inputRoot": {
                        padding: "0",
                    },
                    "& .MuiAutocomplete-input": {
                        padding: "0.4rem 0.8rem !important",
                        color: theme.palette.background.default,
                        fontFamily: theme.typography.paragrafo.fontFamily,
                        fontSize: theme.typography.paragrafo.fontSize,
                    }
                })
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: "0rem 0.8rem",
                    fontSize: theme.typography.button.fontSize,
                    textTransform: "none"
                }),
                disabled: ({ theme }) => ({
                    backgroundColor: theme.palette.info.main,
                    color: theme.palette.info.contrastText,
                })
            }
        },
        MuiChip: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontFamily: theme.typography.intertitulo.fontFamily,
                    fontSize: theme.typography.intertitulo.fontSize
                })
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
                hiddenLabel: true,
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.text.primary,
                    "&:hover": {
                        backgroundColor: "#FFFAE9"
                    },
                    "&.Mui-focused": {
                        backgroundColor: "#FFFAE9"
                    }
                }),
                input: ({ theme }) => ({
                    padding: "0.4rem 0.8rem",
                    color: theme.palette.background.default,
                    fontFamily: theme.typography.paragrafo.fontFamily,
                    fontSize: theme.typography.paragrafo.fontSize,
                    "&::placeholder": {
                        color: theme.palette.background.default,
                    }
                })
            }
        }
    }
})

export default theme;