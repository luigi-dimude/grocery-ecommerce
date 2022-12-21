import Stack from '@mui/material/Stack'
import ProductCard from "../../shared-components/ProductCard_2"
import { StoreHeader as Header } from '../../styles/StyledComponents'
import { products } from '../../data/products'

const WeeklyPicks = () => {

  return (
    <>
      <Header>Weekly Picks</Header>
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

const weeklyPicks = ['Green lime', 'Red tomato', 'Beef', 'Banana', 'Curry chicken soup', 'Cheese rice', 'Cookies', 'Slice bread']

const newProducts = products.filter(prod => weeklyPicks.includes(prod.name))


export default WeeklyPicks