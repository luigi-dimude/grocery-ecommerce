import { useEffect } from 'react'
import Stack from '@mui/material/Stack'
import ProductCard from "../../shared-components/ProductCard_2"
import { StoreHeader as Header } from '../../styles/StyledComponents'
import { products } from '../../data/products'

interface ItemProps {
  filter: string
  name?: string
  search?: boolean
}

const Item = ({ name, filter, search }: ItemProps) => {
  let header
  let newProducts = products.filter(prod => prod.category.startsWith(filter))

  if (search) {
    newProducts = products.filter(prod => prod.name.toLowerCase().startsWith(filter))
  }

  if (!name) {
    header = filter?.charAt(0).toUpperCase() + filter?.slice(1) || filter
  }

  return (
    <>
      <Header>{header ? header : name}</Header>
      <Stack direction='row' flexWrap='wrap' gap={8} justifyContent={{ md: 'start', xs: 'center' }}>
        {
          newProducts.map(prod => {
            return (
              <ProductCard {...prod} original_price={prod.price} key={prod.id} />
            )
          })
        }
      </Stack>
    </>

  )
}


export default Item