import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Product from "../shared-components/ProductCard_3"
import { StyledButton } from '../styles/StyledComponents';
import { useAppSelector } from '../context/hooks'
import moment from 'moment';
import { breakPoint } from '../styles/BreakPoints';




const DrawerComponent = ({ cartButton }: any) => {
  const cartProducts = useAppSelector(state => state.cart.products)
  const cartTotal = useAppSelector(state => state.cart.total_amount)
  const cartTotalPrime = useAppSelector(state => state.cart.total_prime_amount)
  const cartQuantity = useAppSelector(state => state.cart.total_quantity)

  const deliveryFee = cartTotal * 0.2

  const [openDrawer, setOpenDrawer] = useState(false);


  const toggleDrawer = () => setOpenDrawer(!openDrawer)

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >

        <CartWrapper direction='column'>
          <Box sx={{ bgcolor: '#FFF', p: '25px 30px', mb: '20px' }}>
            <Stack
              direction='row'
              justifyContent='space-between'>
              <h3>Cart</h3>
              <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => setOpenDrawer(false)} />
            </Stack>
          </Box>
          <JoinNFT direction='column' justifyContent='center'>
            <span>Enjoy free deliveries and discounts.</span>
            <span><a href="#">Join NFT & Prime</a></span>
          </JoinNFT>
          <CartContent direction='column'>
            <Stack direction='row' justifyContent='space-between'><h2>Cart Total</h2> <h2>${cartTotal}</h2></Stack>
            <NFT_Price direction='row' justifyContent='space-between' sx={{ margin: '10px 0 20px 0' }}>
              <span>NFT & Prime</span>
              <span>${cartTotalPrime}</span>
            </NFT_Price>
            <StyledButton sx={{ fontWeight: 'bold', marginBottom: '20px' }}>Checkout</StyledButton>
            <Stack direction='column'>
              <List>
                {
                  cartProducts && cartProducts?.map(product => {
                    return (
                      <ListItem disablePadding key={product.id + 'cart'}>
                        <Product {...product} original_price={product.price} />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Stack>
          </CartContent>
          <CartTotal>
            <h4>Delivering on {moment().add(7, 'days').format("dddd, MMMM Do")}</h4>
            <Stack direction='row' justifyContent='space-between' alignItems='center' className='sub-total'>
              <span>Subtotal ({cartQuantity} items)</span>
              <span>${cartTotal}</span>
            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems='center' className='delivery'>
              <span>Delivery fee</span>
              <span>${deliveryFee}</span>
            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems='center' className='cart-total'>
              <span className="sub-total">Cart Total</span>
              <span className="sub-total-amount">${cartTotal + deliveryFee}</span>
            </Stack>
            <NFT_Price direction='row' justifyContent='space-between' sx={{ m: 0 }}>
              <span>NFT & Prime</span>
              <span>${cartTotalPrime + deliveryFee}</span>
            </NFT_Price>
          </CartTotal>
        </CartWrapper>
      </Drawer>
      {cartButton(toggleDrawer)}
    </>
  )
}

const CartTotal = styled(Stack)`
padding: 20px 10px;
margin: 20px 10px;
background-color: #FFF;
border-radius: 5px;
color: #000;

& > div {
  margin-bottom: 10px;
}

h4 {
  font-size: 0.875rem;
  color: #000;
  font-weight: 600;
  font-size: 0.875rem;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #BBBBBB;
  margin-bottom: 13px;
}

.cart-total {
  font-size: 1.125rem;
  font-weight: 700;
}
`

const CartContent = styled(Stack)`
  padding: 20px 10px;
margin: 0 10px;
background-color: #FFF;
border-radius: 5px;

h2 {
  font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 1.125rem;
}
`

const JoinNFT = styled(Stack)`
padding: 10px;
text-align: center;
margin: 20px 10px;
background-color: #FFF;
border-radius: 5px;

span {
font-size: 14px;
font-weight: 400;
}

a {
  font-weight: 600;
  font-size: 0.874rem;
  color: #17691D;
  text-decoration: none;
  border-bottom: 2px solid #17691D;
  display: inline-block;
  width: fit-content;
}
`
const CartWrapper = styled(Stack)`
width: 24vw;
background-color: ${props => props.theme.palette.primary.light};

@media ${breakPoint.tablet} {
  width: 40vw;
}
@media ${breakPoint.mobile} {
  width: 100vw;
}
`

const NFT_Price = styled(Stack)`
background-color: #E9F8EA;
border-radius: 5px;
padding: 10px;

span {
  font-size: 1rem;
  color: #17691D;
  font-weight: 700;
}
`

export default DrawerComponent