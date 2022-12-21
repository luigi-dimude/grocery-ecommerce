import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/material/styles";
import Discont_bg from '../assets/Discount-test.svg';


interface ProductProps {
  original_price: number;
  name: string;
  discount: number;
  prime_discount: number;
  quantity: string | number;
  img_src: string;
}

const ProductCard_1 = ({ original_price, name, discount, prime_discount, quantity, img_src }: ProductProps) => {
  const discount_price = Math.floor(original_price - (discount / 100) * original_price)
  return (
    <StyledBox>
      <span className='discount-img'>
        <img src={Discont_bg} alt="Discount background" />
      </span>
      <span className='discount-price'>
        {discount}% <span style={{ display: 'block' }}>OFF</span>
      </span>
      <StyledCard elevation={4}>
        <img src={img_src} alt="lime" className='product-img' />
        <CardContent className='card-content' sx={{ paddingBottom: 0 }}>
          <h3>${discount_price} <span>${original_price}</span></h3>
          <p>${discount_price - prime_discount} Prime/NFT</p>
          <small>{name}, {(typeof quantity === 'number') ? quantity + 'units' : quantity}</small>
        </CardContent>
      </StyledCard>
    </StyledBox>
  )
}
const StyledBox = styled(Box)`
  position: relative;
  display: inline-block;

  .discount-img {
    position: absolute;
    top: -22px;
    right: -22px;
    z-index: 2;
  }

  .discount-price {
    position: absolute;
    top: -15px;
    right: -8px;
    z-index: 3;
    font-size: 1.125rem;
    font-weight: 700;
  }

`
const StyledCard = styled(Card)`

  background-color: #FFF;
  color: #000;
  min-width: 165px;
  max-width: 181px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;


  .product-img {
    max-width: 122px;
    margin: 35px auto 0px auto;
    display: block;
    object-fit: cover;
  }

  .card-content {
    h3 {
    font-size: 1.25rem;
    font-weight: 700;
    position: relative;
    margin-left: 7px;
    margin-bottom: 14px;

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
    margin-bottom: 30px;
    padding: 3px 7px;
  }
  small {
    text-align: center;
    display: block;
    font-size: 0.875rem;
  }
  }


`

export default ProductCard_1