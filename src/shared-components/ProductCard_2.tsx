import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/material/styles";
import Chip from '@mui/material/Chip';
import { breakPoint } from '../styles/BreakPoints';
import { useAppSelector, useAppDispatch } from '../context/hooks'
import { addToCart, removeItem } from '../context/cartSlice';
import { products } from '../data/products';

export interface ProductProps {
  original_price: number;
  name: string;
  discount: number;
  prime_discount: number;
  quantity: string | number;
  img_src: string;
  status: string;
  id: string;
  category: string;
}

const ProductCard_2 = ({ id, name, status, img_src, original_price, discount, prime_discount, quantity, category }: ProductProps) => {

  const [chip, setChip] = useState({ status: '', bg: '' })
  const [disc, setDisc] = useState(0)
  const [add, setAdd] = useState(true)
  const cartProducts = useAppSelector(state => state.cart.products)

  const dispatch = useAppDispatch()

  const getStatus = (status: string) => {
    let obj = { status: '', bg: '' }
    if (status === 'Best seller') obj = { status: 'Best seller', bg: '#EFCB1D' }
    if (status === 'Sale') obj = { status: 'Sale', bg: '#D2855E' }
    if (status === 'New') obj = { status: 'New', bg: '#B4C27C' }
    return obj
  }

  useEffect(() => {
    const discount_price = Math.floor(original_price - ((discount / 100) * original_price))
    setDisc(discount_price)

    const getChip = getStatus(status)
    setChip(getChip)

    const findProduct = cartProducts.find(prod => prod.id === id)
    if (findProduct) {
      setAdd(false)
    }
  }, [])

  const handleAdd = () => {
    setAdd(false)

    const findProduct = products.find(prod => prod.id === id)
    if (findProduct) {
      const cartProduct = { ...findProduct, amount: 1 }
      dispatch(addToCart(cartProduct))
    }
  }
  const handleRemove = () => {
    setAdd(true)

    const findProduct = products.find(prod => prod.id === id)
    if (findProduct) {
      dispatch(removeItem(findProduct.id))
    }
  }

  return (
    <StyledCard elevation={4}>
      <Stack direction='row' sx={{ minHeight: '27px' }}>
        {chip.status && <StyledChip label={chip.status} sx={{ backgroundColor: chip.bg }} />}
      </Stack>
      <img src={img_src} alt="lime" className='product-img' />
      <Stack direction='row' justifyContent='flex-end' sx={{ marginTop: '8px' }}>
        {add ? <StyledButton onClick={handleAdd}>+ Add</StyledButton> : <StyledButton className='remove' onClick={handleRemove}>- Remove</StyledButton>}
      </Stack>
      <CardContent className='card-content' sx={{ paddingBottom: 0 }}>
        <h3>${disc} <span>${original_price}</span></h3>
        {disc && <p>${disc - prime_discount} Prime/NFT</p>}
        <small style={{ color: '#595959', marginBottom: '5px' }}>{category}</small>
        <small>{name}, {(typeof quantity === 'number') ? quantity + 'units' : quantity}</small>
      </CardContent>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`

  background-color: #FFF;
  color: #000;
  min-width: 165px;
  max-width: 208px;
  box-shadow: none;
  position: relative;


  .product-img {
    max-width: 115px;
    margin: 15px auto 0px auto;
    display: block;
    object-fit: cover;
  }

  .card-content {
    h3 {
    font-size: 1.25rem;
    font-weight: 700;
    position: relative;
    margin-left: 7px;
    margin-bottom: 5px;

    span {
      font-weight: 200;
      font-size: 1rem;
      text-decoration: line-through;
      margin-left: 8px;
      position: absolute;
      top: 3px;
      color: #808080;
    }
  }
  p {
    font-size: 1rem;
    text-align: center;
    background-color: #E9F8EA;
    border-radius: 5px;
    color: #17691D;
    font-weight: 400;
    margin-bottom: 5px;
    padding: 3px 7px;
  }
  small {
    display: block;
    font-size: 0.875rem;
  }
  }
`
const StyledChip = styled(Chip)`
  height: 27px;
  background-color: #EFCB1D;
  font-weight: 600;
  `
const StyledButton = styled('button')`
  border: none;
  border-radius: 5px;
  padding: 7px 15px;
  background: var(--secondary-color);
  border-radius: 36px;    
  color: #FFF;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  /* transition: .2s all ease-in; */
  display: inline-block;
  text-decoration: none;

  &.remove {
    background-color: #EBEAEA;
    color: #5E5E5E;
  }

  @media ${breakPoint.tablet} {
    width: 100%;
  }
`
export default ProductCard_2