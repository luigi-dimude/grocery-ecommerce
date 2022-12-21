import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import { breakPoint } from '../styles/BreakPoints';
import ButtonGroup from '@mui/material/ButtonGroup';
import { discountedPrice } from '../utils/helpers'
import { products } from '../data/products';
import { useAppSelector, useAppDispatch } from '../context/hooks'
import { addToCart, removeItem } from '../context/cartSlice';


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
  amount: number;
}

const ProductCard_3 = (props: ProductProps) => {

  const [quantity, setQuantity] = useState<number>(props.amount)
  const [realPrice, setRealPrice] = useState<number | null>(null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const discount_price = discountedPrice(props.original_price, props.discount)
    setRealPrice(discount_price)
  }, [])

  const increment = () => {
    setQuantity(state => state + 1)

    const findProduct = products.find(prod => prod.id === props.id)
    if (findProduct) {
      const cartProduct = { ...findProduct, amount: quantity + 1 }
      dispatch(addToCart(cartProduct))
    }
  }
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  return (
    <Wrapper direction='row' justifyContent='space-between'>
      <div className="left-side">
        <span><img src={props.img_src} alt={props.name + ' image'} /></span>
        <Stack direction='column'>
          <small>{props.category}</small>
          <span className='text'>{props.name}</span>
          <span className='text'>{props.quantity}</span>
          <StyledButtonGroup variant="contained" aria-label="outlined primary button group">
            <StyledButton className='left' onClick={decrement}>-</StyledButton>
            <Stack direction='row' justifyContent='center' alignItems='center'>
              <span>{quantity}</span>
            </Stack>
            <StyledButton className='right' onClick={increment}>+</StyledButton>
          </StyledButtonGroup>
        </Stack>
        <Stack direction='column'>
        </Stack>
      </div>
      <div className="right-side">
        <h3>${realPrice}</h3>
        <h4>${realPrice && realPrice - props.prime_discount}</h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(Stack)`
    width: 100%;
    border-top: .5px solid #BBBBBB;
    padding: 10px 0;

    .left-side {
      display: flex;
      flex-direction: row;
      gap: 10px;

      small {
        font-weight: 400;
        font-size: 0.75rem;
        color: #595959;
      }
      span.text {
        font-weight: 500;
        font-size: 0.875rem;
        color: #000000;
      }
      img {
        max-width: 61.35px;
      }
    }

    .right-side {
      h4 {
        font-weight: 400;
        font-size: 1rem;
        color: #17691D;
      }

    }
  `

const StyledButton = styled('button')`
  border: none;
  padding: 7px 15px;
  background: var(--secondary-color);  
  color: #FFF;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  &.right {
    border-top-right-radius: 36px;    
    border-bottom-right-radius: 36px;  
  }
  &.left {
    border-top-left-radius: 36px;    
    border-bottom-left-radius: 36px;  
  }

  &.remove {
    background-color: #EBEAEA;
    color: #5E5E5E;
  }

  @media ${breakPoint.tablet} {
    width: 100%;
  }
`

const StyledButtonGroup = styled(ButtonGroup)`
box-shadow: none;
margin-top: 3px;
div {
  background-color: var(--secondary-color);
  color: #FFF;
  font-weight: 600;
font-size: 0.75rem;
}
`

export default ProductCard_3