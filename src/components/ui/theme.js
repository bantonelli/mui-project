import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

const theme = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
            contrastText: "#fff",
        },
        secondary: {
            main: `${arcOrange}`,
            contrastText: "#fff",
        },
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        },
    },
    mixins: {
        toolbar: {
            minHeight: "7rem",
        },
    },
});

export default theme