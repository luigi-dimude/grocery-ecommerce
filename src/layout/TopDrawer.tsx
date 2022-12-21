import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import NavButton from '../assets/Nav-button.svg';
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ProfileImg from '../assets/Profile-img.svg'
import { Link } from './Navbar_2'

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Container>
          <Stack direction='column' sx={{ margin: '24px 0' }}>
            <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: '15px' }}>
              <Link to="/">
                <img src={Logo} alt="Foodify Market" width='97px' />
              </Link>
              <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => setOpenDrawer(false)} />
            </Stack>
            <nav>
              <List>
                {links.map(({ text, to }) => (
                  <ListItem key={to} onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                      <Link to={to}>{text}</Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Stack>
        </Container>
      </Drawer>
      <IconButton
        sx={{ color: '#FFF' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <img src={NavButton} alt="Navigation button" />
      </IconButton>
    </>
  )
}

const links = [
  {
    text: 'Store',
    to: '/store/weekly-picks',
  },
  {
    text: 'NFT & Prime',
    to: '/nft-&-prime',
  },
  {
    text: (
      <Stack direction='row' alignItems='center' gap={1}>
        <img src={ProfileImg} alt="Profile image" />
        <span>Sign In</span>
      </Stack>
    ),
    to: '/login',
  },
  {
    text: 'Get started',
    to: 'register'
  }
];

export default DrawerComponent