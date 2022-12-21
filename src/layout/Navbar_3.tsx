import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Container from '../shared-components/Container_2';
import Logo from '../assets/Logo.svg'
import CartIcon from '../assets/Cart-icon.svg'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '../assets/Search-icon.svg'
import ProfileImg from '../assets/Profile-img.svg'
import { Link as Lnk } from "react-router-dom"
import { breakPoint } from '../styles/BreakPoints';
import DrawerComponent from './TopDrawer';
import Cart from './CartDrawer';
import { StyledNavButton as CartButton } from '../styles/StyledComponents';
import { useAppSelector, useAppDispatch } from '../context/hooks'
import { updateFilters } from '../context/nftSlice'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(updateFilters({ name: 'search', value: search }))
    }
  }

  return (
    <Box sx={{ zIndex: 10, position: 'relative' }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Container>
            <div className='mobile-view'>
              <div className='mobile-nav-wrapper'>
                <DrawerComponent />
                <Lnk to='/'>
                  <img src={Logo} alt="Foodify Market" width='97px' />
                </Lnk>
                <Lnk to='/login'>
                  <img src={ProfileImg} alt="Profile image" />
                </Lnk>
              </div>
            </div>
            <div className='main-view'>
              <div className='main-view-wrapper'>
                <Lnk to='/' style={{ marginRight: '48px' }}>
                  <img src={Logo} alt="Foodify Market" />
                </Lnk>
                <nav>
                  <ul>
                    <li>
                      <SearchBar direction='row' alignItems='center' >
                        <img src={SearchIcon} alt="search icon" />
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="Search NFT"
                          inputProps={{ 'aria-label': 'search google maps' }}
                          value={search}
                          onChange={handleSearch}
                          onKeyDown={handleKeyDown}
                        />
                      </SearchBar>
                    </li>
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
                      <Cart cartButton={(func: any) => <CartButton variant="outlined" size="large" startIcon={<img src={CartIcon} alt="cart icon" />} onClick={() => func()}>Cart</CartButton>} />
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
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
/* box-shadow: none; */
z-index: 10;
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
border-radius: 2px;
transition: .2s all ease-in;

/* &:hover {
  border-color: ${props => props.theme.palette.secondary.main};
} */
`

const SearchBar = styled(Stack)`
min-width: 350px;
/* height: 45px; */
padding: 12px 11px;
background: #F4F4F4;
border-radius: 5px;

@media (max-width: 1341px){
  display: none;
}
`


export default Navbar