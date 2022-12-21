import { Container as Wrapper } from '@mui/material'



interface ThemeProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: ThemeProps) => {
  return (
    <Wrapper sx={{ maxWidth: '1400px' }} maxWidth={false}>
      {children}
    </Wrapper>
  )
}

export default Container
