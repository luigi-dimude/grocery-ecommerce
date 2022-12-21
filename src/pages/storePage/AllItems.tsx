import Stack from '@mui/material/Stack'
import ProductCard from "../../shared-components/ProductCard_2"
import { StoreHeader as Header } from '../../styles/StyledComponents'
import { products } from '../../data/products'

const AllItems = () => {

  return (
    <>
      <Header>All Items</Header>
      <Stack direction='row' flexWrap='wrap' gap={8} justifyContent={{ md: 'start', xs: 'center' }}>
        {
          products.map(prod => {
            return (
              <ProductCard {...prod} original_price={prod.price} key={prod.id} />
            )
          })
        }
      </Stack>
    </>

  )
}


export default AllItems