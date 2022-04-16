import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const button = {
    borderRadius: "3px",
    fontSize: "14px",
    letterSpacing: "-0.5px",
    padding: "7px 35px",
    textTransform: "unset",
}
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    ...button
                },
                disableElevation: {
                    ...button
                },
                outlined: {
                    ...button
                },
                contained: {
                    ...button,
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    width: '40px',
                    height: '40px',
                    fontWeight: 'bold',
                    '&$completed': {
                        color: '#318940',
                        zIndex: 111
                    },
                    '&$active': {
                        color: '#473BF0',
                        zIndex: 111
                    },
                },
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                inputRoot: {
                    paddingTop: 5
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid  #d5d5d5'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none'
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: '7px',
                    border: '1px solid #d3d3d3'
                },

            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: 'white',
                    height: '48px',
                },
                multiline: {
                    height: '100%',
                },

            }
        }
    },

    palette: {
        secondary: {
            main: "#3b9efa",
        }
    },

});

export default theme;