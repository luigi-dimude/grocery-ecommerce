import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NFTLayout from './layout/NFTLayout'
import MainLayout from './layout/Layout_1'
import StoreLayout from './layout/StoreLayout'
// Pages
import About from './pages/About'
import Home from './pages/Home'
// Auth
import Login from './pages/Login'
import Register from './pages/Register'
// Store
import WeeklyPicks from './pages/storePage/WeeklyPicks'
import RecipeInspiration from './pages/storePage/RecipeInspiration'
import AllItems from './pages/storePage/AllItems'
import Items from './pages/storePage/Items'
import NFT from './pages/NFT/NFT'
import { products } from "./data/products"
import { createUrl } from './utils/helpers'
const categories = [...new Set(products.map(prod => prod.category))]
export const store = ['All items', ...categories, 'Others']



function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<NFTLayout />}>
              <Route path="/nft-&-prime" element={<NFT />} />
            </Route>
            <Route path="/store" element={<StoreLayout />}>
              <Route path="weekly-picks" index element={<WeeklyPicks />} />
              <Route path="recipe-inspiration" element={<RecipeInspiration />} />
              <Route path="all-items" element={<AllItems />} />
              <Route path="others" element={<Items filter='others' />} />
              {
                store.map(prod => {
                  return (
                    <Route key={prod} path={createUrl(prod)} element={<Items filter={prod} />} />
                  )
                })
              }
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}


export default App
