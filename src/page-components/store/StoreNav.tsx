import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { styled } from "@mui/material/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { v4 as uuid } from "uuid";
import { products } from "../../data/products"
import { store } from '../../App'
import { createUrl } from '../../utils/helpers'
import { useAppSelector, useAppDispatch } from '../../context/hooks'
import { addToSearch } from '../../context/searchProductSlice';


const StoreNav = () => {
  const location = useLocation();
  const dispatch = useAppDispatch()

  const [current, setCurrent] = useState('')


  const picks = ['Weekly Picks', 'Recipe Inspiration']


  useEffect(() => {
    const currentPath = location.pathname.split('/')[2].split('-').join(' ')
    setCurrent(currentPath)
    dispatch(addToSearch(''))
  }, [location])




  return (
    <Wrapper>
      <nav>
        <StyledList>
          <h2>Our pick for You</h2>
          {picks.map(link => {
            if (link.toLowerCase() === current) {
              return (
                <Item key={uuid()}>
                  <Link to={createUrl(link)} className='active'>{link}</Link>
                </Item>
              )
            }
            return (
              <Item key={uuid()}>
                <Link to={createUrl(link)} >{link}</Link>
              </Item>
            )
          })}
        </StyledList>
        <StyledList>
          <h2>Store Aisle</h2>
          {store.map(link => {
            if (link.toLowerCase() === current) {
              return (
                <Item key={uuid()}>
                  <Link to={createUrl(link)} className='active'>{link}</Link>
                </Item>
              )
            }
            return (
              <Item key={uuid()}>
                <Link to={createUrl(link)} >{link}</Link>
              </Item>
            )
          })}
        </StyledList>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  background-color: ${props => props.theme.palette.primary.light};
  padding: 50px 0;
  display: flex;
  justify-content: center;
  `

const StyledList = styled(List)`

h2 {
  font-size: 1rem;
  font-family: 'poppins', sans-serif;
  margin-bottom: 25px;
}
a {
  font-size: 0.875rem;
  text-decoration: none;
  color: #000;
}
a:hover,a.active {
  color: var(--secondary-color);
  font-weight: bold;
}

`
const Item = styled(ListItem)`
  padding: 0 0 15px 0;
`


export default StoreNav