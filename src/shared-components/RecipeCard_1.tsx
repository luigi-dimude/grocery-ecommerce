import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/material/styles";
import { breakPoint } from '../styles/BreakPoints';
import { NTF_Text, StyledButton } from '../styles/StyledComponents'
import { discountedPrice } from '../utils/helpers'

interface RecipeProps {
  original_price: number;
  name: string;
  discount: number;
  prime_discount: number;
  quantity: string | number;
  img_src: string;
  id: string;
}


const RecipeCard = (props: RecipeProps) => {

  const discounted_price = discountedPrice(props.original_price, props.discount)
  const prime_price = discounted_price - props.prime_discount
  return (
    <div style={{ width: '30%', minWidth: '300px', maxWidth: '400px' }}>
      <StyledCard elevation={4}>
        <img src={props.img_src} alt="lime" className='testimonial-img' />
        <CardContent className='card-content' sx={{ paddingBottom: 0 }}>
          <div className='paragraph-wrapper'>
            <h3>{props.name}</h3>
            {props.discount > 0 ? <p className='nth-1'>Save <span className='hightlight-text'>{props.discount}%</span> off market price</p> : <p className='nth-1'></p>}
            <p><strong>{props.quantity}</strong></p>
            <p className='nth-3'>Ingredients in your order includes: Cooking manual, rice, chicken, seafood, cooking leaf, and oranges. Prepare your meal in 25 minutes.</p>
          </div>
          <NTF_Text>${prime_price} Prime/NFT</NTF_Text>
          <Button>
            <Stack direction='row' justifyContent='space-between'><span>Add all to cart</span><span>${discounted_price}</span></Stack>
          </Button>
        </CardContent>
      </StyledCard>
    </div>
  )
}



const StyledCard = styled(Card)`
background-color: #FFF;
color: #000;
width: 100%;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
border-radius: 5px;

.testimonial-img {
  width: 100%;
  object-fit: cover;
  max-height: 210px;
}
.card-content {
  
  padding:15px 17px;

  .paragraph-wrapper {
    margin-bottom: 10px;

    p {
    font-size: 0.875rem;
    /* width: 90%; */
    margin: auto;
    }
    p.nth-1 {
        margin-bottom: 20px;
      }
      
    .open-quotation-mark {
      position: absolute;
      top: 11px;
      left: -23px;
    }
    .close-quotation-mark {
      position: absolute;
      bottom: 5px;
      right: 2px;
    }
  }


h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 5px;
  font-size: 110%;
}



}

@media ${breakPoint.mobile} {
  width: 272px;
  .card-content {
    .paragraph-wrapper {
      p {
        font-size: 0.75rem;
      }
    }
  
  }
}


`

const Button = styled(StyledButton)`
font-weight: bold;
padding: 12px 12px;
display: block;
width: 100%;
margin-top: 90px;

`

export default RecipeCard
