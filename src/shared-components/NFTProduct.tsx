import React from 'react'
import Card from '@mui/material/Card';
import { styled } from "@mui/material/styles";
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/system';
import { NFTProductType } from '../data/products'

const NFTProduct = (props: NFTProductType) => {

  return (
    <StyledWrapper>
      <StyledCard elevation={1}>
        <div className="img-wrapper">
          <img src={props.img_src} alt="NFT Image" />
          <span className='prime-left'>{props.primes} {props.primes > 1 ? 'primes left' : 'prime left'}</span>
        </div>
        <StyledContent>
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ marginBottom: '10px' }}>
            <span className="farm-cow">
              FarmCow
            </span>
            <span className="nft-id">
              {props.nft_id}
            </span>
          </Stack>
          <span className='currency'>${props.price}</span>
        </StyledContent>
        <Subscribe className={props.primes > 0 ? '' : 'disabled'} disabled={props.primes > 0 ? false : true}>
          <span>{props.primes > 0 ? `Subscribe to ${props.nft_id}` : 'Sold out'}</span>
        </Subscribe>
      </StyledCard>
    </StyledWrapper>
  )
}

const StyledWrapper = styled('div')`
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 5px 5px;  
margin-top:3px;
`

const StyledCard = styled(Card)`
min-width: 165px;
  max-width: 181px;

  .img-wrapper {
    position: relative;
  }
  .prime-left {
    font-weight: 500;
  font-size: 0.75rem;
  padding: 3px;
  border: 1px solid #9F9C9C;
  border-radius: 5px;
  color: #000000;
  position: absolute;
  background-color: #FFF;
  bottom: 12px;
  left: 7px;
  }
`

const StyledContent = styled(CardContent)`
padding: 7px 10px;

.farm-cow {
  font-weight: 500;
  font-size: 0.75rem;
  color: #000000;

}
.nft-id {
  font-weight: 500;
  font-size: 0.75rem;
  padding: 3px;
  border: 1px solid #9F9C9C;
  border-radius: 5px;
  color: #000000;
}

.currency {
  font-size: 0.875rem;
  color: #000000;
  font-weight: 600;
  margin-bottom: 10px;
}


`

const Subscribe = styled('button')`
  display: flex;
  justify-content: center;
  background-color: #E0593F;
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 7px;

  &.disabled {
    cursor: not-allowed;
    background-color: #E5E5E5;
    span {
      color: #9F9C9C;
    }
  }

  span {
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
  }

`


export default NFTProduct