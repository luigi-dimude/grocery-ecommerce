import React from 'react'
import { styled } from "@mui/material/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Container from '../shared-components/Container_2';
import Logo from '../assets/Logo.svg'
import ProfileImg from '../assets/Profile-img.svg'
import { Link as Lnk } from "react-router-dom"
import { breakPoint } from '../styles/BreakPoints';
import DrawerComponent from './TopDrawer';


const Navbar = () => {

  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar sx={{ padding: '0px !important' }} className='hes'>
          <Container>
            <div className='mobile-view'>
              <div className='mobile-nav-wrapper'>
                <DrawerComponent />
                <Lnk to='/'>
                  <img src={Logo} alt="Foodify Market" width='97px' />
                </Lnk>
                <Lnk to='/login'>
                  <img src={ProfileImg} alt="Profile icon" />
                </Lnk>
              </div>
            </div>
            <div className='main-view'>
              <div className='main-view-wrapper'>
                <Lnk to='/'>
                  <img src={Logo} alt="Foodify Market" />
                </Lnk>
                <nav>
                  <ul>
                    <li>
                      <Link to='/store/weekly-picks'>Store</Link>
                    </li>
                    <li>
                      <Link to='/nft-&-prime'>NFT & Prime</Link>
                    </li>
                    <li>
                      <Link to='/login'>
                        <Stack direction='row' className='nav-link' alignItems='center' justifyContent='center' gap={1}>
                          <img src={ProfileImg} alt="Profile image" />
                          <span>Sign In</span>
                        </Stack>
                      </Link>
                    </li>
                    <li>
                      <Link to='/register'><span className='link'>Get Started</span></Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Container>
        </Toolbar>
      </StyledAppBar>
    </Box>
  )
}

const StyledAppBar = styled(AppBar)`
background-color: #FFF;
box-shadow: none;
padding: 1.5rem 0;

& .mobile-view {
  display: none;
}

& .main-view {
  display: block;
} 

& .mobile-nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

& .main-view-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
  }
  li {
    padding-left: 3.3rem;
    font-weight: 700;
  }

  @media ${breakPoint.tablet} {
  display: flex;
  flex-direction: column;

  & nav {
    margin-top: 3rem;
  }
  }
}
    
@media ${breakPoint.tablet} {

& .mobile-view {
  display: block;
}

& .main-view {
  display: none;
}
}
`
export const Link = styled(Lnk)`
text-decoration: none;
color: #000;
font-weight: 700;
padding-bottom: 4px;
/* border-bottom: 4px solid transparent; */
border-radius: 2px;
transition: .2s all ease-in;

.nav-link {
  /* border-bottom: 4px solid transparent; */
/* padding-bottom: 3px; */

}



`


export default Navbar