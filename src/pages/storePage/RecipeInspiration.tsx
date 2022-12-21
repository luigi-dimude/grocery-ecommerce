import Stack from '@mui/material/Stack'
import RecipeCard from "../../shared-components/RecipeCard_1"
import { StoreHeader as Header } from '../../styles/StyledComponents'

const RecipeInspiration = () => {

  return (
    <>
      <Header>Recipe Inspiration</Header>
      <Stack direction='row' flexWrap='wrap' justifyContent='space-between' gap={5}>
        {recipes.map(recipe => {
          return (
            <RecipeCard  {...recipe} key={recipe.id} />
          )
        })}
      </Stack>
    </>

  )
}

const recipes = [
  {
    id: 'recipe_1',
    name: 'Seafood spice rice',
    description: 'Ingredients in your order includes: Cooking manual, rice, chicken, seafood, cooking leaf, and oranges. Prepare your meal in 25 minutes.',
    discount: 20,
    quantity: '4 liters in quantity',
    prime_discount: 600,
    img_src: '/products/Recipe-1.png',
    original_price: 4000
  },
  {
    id: 'recipe_2',
    name: 'Chicken and veggies',
    description: 'Ingredients in your order includes: Cooking manual, rice, chicken, seafood, cooking leaf, and oranges. Prepare your meal in 25 minutes.',
    discount: 10,
    quantity: '7 liters in quantity',
    prime_discount: 600,
    img_src: '/products/Recipe-2.png',
    original_price: 5000
  },
  {
    id: 'recipe_3',
    name: 'Vegetarian soup',
    description: 'Ingredients in your order includes: Cooking manual, rice, chicken, seafood, cooking leaf, and oranges. Prepare your meal in 25 minutes.',
    quantity: '10 liters in quantity',
    discount: 45,
    prime_discount: 600,
    img_src: '/products/Recipe-3.png',
    original_price: 5000
  }
]

export default RecipeInspiration