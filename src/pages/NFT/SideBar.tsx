import React from 'react'
import { styled } from "@mui/material/styles";
import ProfileImg from '../../assets/NFT-Profile.png'
import EthIcon from '../../assets/Eth-icon.svg'
import Stack from '@mui/material/Stack';
import { v4 as uuid } from "uuid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, useLocation } from "react-router-dom"

const SideBar = () => {
  return (
    <Wrapper>
      <nav className='nav-links'>
        <div className="profile-img">
          <img src={ProfileImg} alt="profile image" />
        </div>
        <div className='profile-name'>Hello James</div>
        <Stack direction='row' alignItems='center' gap={1}>
          <img src={EthIcon} alt="Eth icon" />
          <span style={{ margin: 0 }}>No connection</span>
        </Stack>
        <div className='wallet'>
          <WalletButton>Connect Wallet</WalletButton>
          {navLinks.map(link => {
            return (
              <Item key={uuid()}>
                <Link to='/' >{link}</Link>
              </Item>
            )
          })}
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled('aside')`
  background-color: ${props => props.theme.palette.primary.light};
  padding: 20px 0;
  display: flex;
  justify-content: start;

  .profile-img {
    margin-bottom: 20px;
  }
  .profile-name {
    color: #000000;
    font-weight: 700;
    font-size: 1rem;
  }

  .nav-links {
    & > div, span {
      margin-bottom: 10px;
    }
  }

  .wallet {
    a {
  font-size: 0.875rem;
  text-decoration: none;
  color: #000;
  }
  a:hover,a.active {
    color: var(--secondary-color);
    font-weight: bold;
  }
  }
  `
const WalletButton = styled('button')`
  border: 1px solid ${props => props.theme.palette.secondary.main};
  border-radius: 5px;
  padding: 6px 20px;
  background-color: ${props => props.theme.palette.secondary.main};
  color: #FFF;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 25px;
  `
const Item = styled(ListItem)`
padding: 0 0 15px 0;
`
const navLinks = ['Get Prime', 'Buy NFT', 'Your NFTs', 'NFT and Prime']

export default SideBar