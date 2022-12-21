import { Container as MuiContainer } from '@mui/material'
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";


interface ThemeProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: ThemeProps) => {
  return (
    <Wrapper maxWidth={false}>
      {children}
    </Wrapper>
  )
}


const Wrapper = styled(MuiContainer)`
max-width: 1562px;

@media (min-width: 744px) {
  padding-left: 50px;
  padding-right: 50px;
  
}
`
export default Container
