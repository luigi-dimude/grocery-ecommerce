import { createTheme, ThemeProvider as Theme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material"


interface ThemeProps {
  children: JSX.Element;
}


const ThemeProvider = ({ children }: ThemeProps) => {

  // let theme = createTheme({})
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#EFCB1D",
        light: "#FCF6DC"
      },
      secondary: {
        main: "#E0593F",
        light: "#F5CDC5"
      }
    },
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontFamily: "EB Garamond",
      },
      h2: {
        fontFamily: "EB Garamond",
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 744,
        md: 1032,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <Theme theme={theme}>
      <CssBaseline />
      {children}
    </Theme>
  );

}

export default ThemeProvider