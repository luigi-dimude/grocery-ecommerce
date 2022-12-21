import React, { forwardRef, useRef, useEffect, useState } from 'react'
import { styled } from "@mui/material/styles";
import Container from '../../shared-components/Container_2';
import HeroImg from '../../assets/NFT-bg-img.jpg'
import { ReactElasticCarouselProps, RenderArrowProps, RenderPaginationProps } from 'react-elastic-carousel'
import Carousel from "react-elastic-carousel";
import LeftArrow from '../../assets/LeftArrow.svg'
import RightArrow from '../../assets/RightArrow.svg'
import { breakPoint } from '../../styles/BreakPoints';
import Filters from './Filters';
import SideBar from './SideBar';
import NFTItems from './NFTItems';
import { nft_products } from '../../data/products'
import { useAppSelector, useAppDispatch } from '../../context/hooks'
import { load_products, filter, sort } from '../../context/nftSlice';



const NFT = () => {
  let resetTimeout: any;
  const carouselRef = useRef<any>(null);
  const products = useAppSelector(state => state.nft.filtered_products)


  const myArrow = ({ type, onClick, isEdge }: RenderArrowProps) => {

    const pointer = type === "PREV" ? <img src={LeftArrow} alt="Left arrow" /> : <img src={RightArrow} alt="Right arrow" />
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  const CustomCarousel = forwardRef<
    any,
    ReactElasticCarouselProps & { children: JSX.Element[] }
  >((props, ref) => <Carousel ref={carouselRef} {...props} onNextEnd={({ index }) => {
    clearTimeout(resetTimeout)
    if (index + 1 === 3) {

      resetTimeout = setTimeout(() => {
        carouselRef?.current?.goTo(0)
      }, 1500) // same time
    }
  }} />);




  return (
    <Wrapper>
      <Container>
        <Hero style={{ backgroundImage: `url(${HeroImg})` }} >
          <div className="content">
            {
              HeroImg &&
              <CustomCarousel isRTL={false} renderArrow={myArrow} initialActiveIndex={0} enableAutoPlay autoPlaySpeed={1500}>
                <CarouselItem key={'carousel-nft-1'}>
                  <h3>Enjoy free deliveries, massive discounts  and be first in line on limited products</h3>
                  <p>Subscribe to FarmCow NFT holder to enjoy prime service</p>
                  <a>Subscribe to a FarmCow NFT</a>
                </CarouselItem>
                <CarouselItem key={'carousel-nft-2'}>
                  <h3>Enjoy free deliveries, massive discounts  and be first in line on limited products</h3>
                  <p>Subscribe to FarmCow NFT holder to enjoy prime service</p>
                  <a>Subscribe to a FarmCow NFT</a>
                </CarouselItem>
                <CarouselItem key={'carousel-nft-3'}>
                  <h3>Enjoy free deliveries, massive discounts  and be first in line on limited products</h3>
                  <p>Subscribe to FarmCow NFT holder to enjoy prime service</p>
                  <a>Subscribe to a FarmCow NFT</a>
                </CarouselItem>
              </CustomCarousel>
            }
          </div>
        </Hero>
        <MainSection>
          <SideBar />
          <main>
            <Filters />
            <NFTItems items={products} />
          </main>
        </MainSection>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
    background-color: #FCF6DC;
    & > div {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .test {
      background-color: red;
      width: 100%;
      height: 100%;
    }


  `
const Hero = styled('header')`
  height: 18rem;
  max-width: 100%;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  margin: 0 auto;
  border-radius: 3px;

  .content {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 5px;
  }

.rec-carousel button {
  width: 23px;
    height: 37px;
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  align-self: center;
}
.rec.rec-arrow {
color: #FFF !important;
}
button.rec-dot{

  background-color: #FFF;
  height: 5px;
    width: 22px;
    box-shadow: none;
    border: none;
  background: #FFF;
  border-radius: 2px;
  outline: #FFF;
}

button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus, button.rec-dot_active  {
  background-color: #E0593F;
  width: 43px;

}
  `
const CarouselItem = styled('div')`
display: flex;
flex-direction: column;
max-width: 600px;

h3 {
  font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
text-align: center;
margin-bottom: 14px;

}

p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
}
a {
	color: inherit;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  display: inline-block;
  border: 2px solid #FFF;
  border-radius: 5px;
  font-weight: 700;
  padding: 1rem;
  width: fit-content;
  align-self: center;
}

`
const MainSection = styled('section')`
    display: grid;
    gap: 6rem 1.5rem;
    grid-template-columns: 216px 1fr;
    margin-top: 50px;
    @media ${breakPoint.tablet} {
      grid-template-columns: 200px 1fr;

    }
`


export default NFT