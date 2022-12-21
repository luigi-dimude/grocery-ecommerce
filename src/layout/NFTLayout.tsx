
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar_3'
import Footer from './Footer'
import { useEffect } from 'react'
import { nft_products } from '../data/products'
import { useAppSelector, useAppDispatch } from '../context/hooks'
import { load_products, filter, sort } from '../context/nftSlice';

const Layout = () => {

  const dispatch = useAppDispatch()
  const prodState = useAppSelector(state => state.nft)

  useEffect(() => {
    dispatch(load_products(nft_products))

  }, [nft_products])

  useEffect(() => {
    dispatch(filter())
    dispatch(sort())

  }, [nft_products, prodState.filters, prodState.sort])
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}

export default Layout