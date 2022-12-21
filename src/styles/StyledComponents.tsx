import { styled } from "@mui/material/styles";
import { breakPoint } from '../styles/BreakPoints';
import Button from '@mui/material/Button';

export const StyledButton = styled('button')`
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 12px 50px;
  background-color: var(--primary-color);
  color: #000;
  font-weight: 500;
  cursor: pointer;
  transition: .2s all ease-in;
  display: inline-block;
  text-decoration: none;

  @media ${breakPoint.tablet} {
    width: 100%;
  }
`
export const StyledButton2 = styled('button')`
  border: 2px solid #ADADAD;
  border-radius: 5px;
  padding: 12px 50px;
  background-color: #EBEAEA;
  color: #5E5E5E;
  font-weight: 500;
  cursor: pointer;
  transition: .2s all ease-in;
  display: inline-block;
  text-decoration: none;

  @media ${breakPoint.tablet} {
    width: 100%;
  }
`

export const StyledNavButton = styled(Button)`
  
  color: #000;
  border: 2px solid #000000;
  border-radius: 5px;
  font-weight: 700;
  padding: 18px 60px;
  background-color: #FFF;

  &:hover {
    color: #000;
  border: 2px solid #000000;
  background-color: #FFF;

  }
`

export const StoreHeader = styled('h1')`
font-family: 'Poppins';
font-weight: 700;
font-size: 1.25rem;
margin-top: 30px;
margin-bottom: 20px;
`

export const NTF_Text = styled('span')`

    font-size: 1rem;
    background-color: #E9F8EA;
    border-radius: 5px;
    color: #17691D;
    font-weight: 400;
    margin-bottom: 5px;
    padding: 3px 7px;
  
`