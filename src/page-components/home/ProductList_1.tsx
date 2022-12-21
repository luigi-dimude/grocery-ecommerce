import React, { forwardRef } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { styled } from "@mui/material/styles";
import ProductCard_1 from '../../shared-components/ProductCard_1';
import Container from '../../shared-components/Container_2';
import Carousel from "react-elastic-carousel";
import { ReactElasticCarouselProps } from 'react-elastic-carousel'
import { breakPoint as bp } from '../../styles/BreakPoints';
import { products } from '../../data/products'



// interface ProductListProps {
//   products: JSX.Element[];
// }

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


const ProductList_1 = () => {

  const featuredProducts = products.filter(product => product.featured)

  const CustomCarousel = forwardRef<
    any,
    ReactElasticCarouselProps & { children: JSX.Element[] }
  >((props, ref) => <Carousel ref={ref} {...props} />);


  return (
    <StyledBox>
      <Container>
        <div className="main-view">
          <Stack direction='row' justifyContent='center' alignItems='center' flexWrap='wrap' gap={4} sx={{ margin: '4rem 0 2rem 0' }}>
            {
              featuredProducts.slice(0, 4).map((product) => {
                return (
                  <ProductCard_1 key={product.id}
                    original_price={product.price} name={product.name} img_src={product.img_src}
                    discount={product.discount} prime_discount={product.prime_discount} quantity={product.quantity} />
                )
              })
            }
          </Stack >
          <Stack direction='row' justifyContent='center' alignItems='center' flexWrap='wrap' gap={4} sx={{ margin: '4rem 0 2rem 0' }}>
            {
              featuredProducts.slice(4).map((product) => {
                return (
                  <ProductCard_1 key={product.id}
                    original_price={product.price} name={product.name} img_src={product.img_src}
                    discount={product.discount} prime_discount={product.prime_discount} quantity={product.quantity} />
                )
              })
            }
          </Stack >
        </div>
        <div className="tablet-view">
          <CustomCarousel itemPadding={[30, 0, 20, 0]} initialActiveIndex={1} pagination={false} showArrows={false} enableSwipe={true} isRTL={true} breakPoints={breakPoints}>
            {
              featuredProducts.map((product) => {
                return (
                  <ProductCard_1 key={product.id}
                    original_price={product.price} name={product.name} img_src={product.img_src}
                    discount={product.discount} prime_discount={product.prime_discount} quantity={product.quantity} />
                )
              })
            }
          </CustomCarousel>
        </div>
      </Container>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  & .tablet-view {
    display: none;

  }
  .main-view {
    display: block;
  }

  @media ${bp.tablet} {
    .tablet-view {
    display: block;

     
  }
  .main-view {
    display: none;
  }
  }
`

export default ProductList_1