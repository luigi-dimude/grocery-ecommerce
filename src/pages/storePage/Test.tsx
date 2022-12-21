import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import StoreNav from '../../page-components/store/StoreNav'
import { styled } from "@mui/material/styles"
import Navbar from '../../layout/Navbar_1'
import Footer from '../../layout/Footer'
import Stack from '@mui/material/Stack'
import ItemIcon from '../assets/Item-icon.svg'
import DeliveryIcon from '../assets/Item-icon.svg'
import { useAppSelector, useAppDispatch } from '../../context/hooks'
import { calculateTotals } from '../../context/cartSlice';
import Cart from '../../layout/CartDrawer';
import moment from 'moment';
import { breakPoint } from '../../styles/BreakPoints';



const StorePage = () => {

  const dispatch = useAppDispatch()

  const cart = useAppSelector(state => state.cart)
  const cartQuantity = useAppSelector(state => state.cart.total_quantity)


  useEffect(() => {
    dispatch(calculateTotals())

  }, [cart])

  return (
    <>
      <Navbar />
      <Wrapper>
        <StoreNav />
        <InnerWrapper>
          <Info>
            <Stack direction='row' justifyContent='start' alignItems='center' gap={1} className="basket">
              <Stack direction='row' alignItems='center' gap={1} sx={{ width: '100%' }}>
                <img src={ItemIcon} alt="Item Icon" style={{ marginBottom: '4px' }} />
                <span style={{ marginRight: 'auto' }}>({cartQuantity}) items</span>
              </Stack>
              <Cart cartButton={(func: any) => <a href="#" onClick={() => func()}>View your basket</a>} />
            </Stack>
            <Stack direction='row' justifyContent='start' alignItems='center' className="delivery" gap={1.5}>
              <img src={DeliveryIcon} alt="Delivery Icon" />
              <span>Delivery on {moment().add(7, 'days').format("dddd, MMMM Do")}</span>
            </Stack>
          </Info>

          {/*  */}


          {/*  */}
        </InnerWrapper>
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled('div')`
    display: grid;
    gap: 6rem 1.5rem;
    grid-template-columns: 300px 1fr;
    background-color: #FFF;

    @media ${breakPoint.tablet} {
      grid-template-columns: 200px 1fr;

    }
  `

const InnerWrapper = styled('main')`
padding: 50px 40px;
max-width: 95%;

@media ${breakPoint.tablet} {
  padding: 50px 0px;
}

h1 {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 30px;
  margin-bottom: 20px;
}
`

const Info = styled('section')`
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    gap: 37px;
    font-weight: 600;
    font-size: 0.875rem;

   & > div {
      padding: 0 19px;
      height: 70px;
      width: 100%;
      border-radius: 5px;
    }

    .basket {
      background: #FDF8DF;

      a {
        display: inline-block;
        color: #000000;
        border: 2px solid #000000;
        border-radius: 47px;
        padding: 10px 20px;
        text-decoration: none;
        flex: none;
        width: max-content;
      }
    }

    .delivery {
      background: #F5CDC5;
    }

    @media ${breakPoint.tablet} {
    flex-direction: column;
    gap: 1rem 1.5rem;

    .basket {
    }
    
    }
  `

export default StorePage