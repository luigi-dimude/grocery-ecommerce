import React from 'react'
import NFT from '../../shared-components/NFTProduct'
import Stack from '@mui/material/Stack';
import { nft_products } from '../../data/products'
import { NFTProductType } from '../../data/products'
import { styled } from "@mui/material/styles";



interface NFTItemsProps {
  items: NFTProductType[];
}

const NFTItems = (props: NFTItemsProps) => {
  return (
    <Wrapper>
      {
        props.items.map(prod => {
          return (
            <NFT {...prod} key={prod.id} />
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled('div')`
display: grid; 
  grid-template-columns: repeat(auto-fill, 179px); 
  grid-gap: 1rem; 
  justify-content: space-between;
`

export default NFTItems