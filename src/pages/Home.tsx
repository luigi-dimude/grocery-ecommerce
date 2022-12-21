import { Link } from "react-router-dom"
import Groceries from '../assets/Groceries.png'
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '../shared-components/Container_2';
import Waves from '../assets/Waves-bg.svg';
import Check from '../assets/Check-mark.svg';
import FarmCow from '../assets/Farm-cow.png';
import ProductList_1 from '../page-components/home/ProductList_1';
import TestimonialList from '../page-components/home/TestimonialList';
import { breakPoint } from '../styles/BreakPoints';




const Home = () => {
  return (
    <main>
      <Container>
        <SaveBigContainer>
          <section className='content'>
            <h1>Save big with zero market stress</h1>
            <p>Get all your groceries delivered at <span className='hightlight-text'>up to 40% off your local market price.</span> Build your weekly/monthly grocery basket for amazing discounts.</p>
            <Link to='/register' className='link'>Get Started</Link>
          </section>
          <section>
            <img src={Groceries} alt="Groceries" />
          </section>
        </SaveBigContainer>
      </Container>
      <BenefitsContainer>
        <img src={Waves} className='vector-bg' />
        <div className='content'>
          <h2>Whats our benefits for you</h2>
          <Container>
            <Stack direction={{ md: 'row', sm: 'column' }}>
              {benefits.map(item => {
                return (
                  <div className='benefits' key={item.id}>
                    <img src={item.img} alt="benefit-image-icon" />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </Stack>
          </Container>
        </div>
      </BenefitsContainer>
      <DealsContainer>
        <div className="content">
          <h2>Mind blowing savings</h2>
          <p>Get all your groceries delivered at <span className='hightlight-text'>up to 40% off your local market price</span>. Build your weekly/monthly grocery basket for amazing discounts.</p>
        </div>
        <div className="cards">
          <ProductList_1 />
        </div>
      </DealsContainer>
      <img src={Waves} className='vector-bg' />
      <FarmCowContainer>
        <Container>
          <Stack direction={{ md: 'row', sm: 'column' }} justifyContent='space-between' gap={4}>
            <section className="farm-cow-img">
              <img src={FarmCow} alt='farm cow image' />
            </section>
            <section className="farm-cow-content">
              <h2>Be a part of our NFT project </h2>
              <h3>FarmCow NFT utilities is like no other NFT project.</h3>
              <ul>
                <li>
                  <img src={Check} alt="check mark" />
                  <p>Instant Prime holder for life (Prority supply, prime discount on all products, special occasional bonuses) </p>
                </li>
                <li>
                  <img src={Check} alt="check mark" />
                  <p>Earn up to 1 million naira monthly by hundreds of shoppers subsribing to your NTF. </p>
                </li>
                <li>
                  <img src={Check} alt="check mark" />
                  <p>Get crypto air drops occasionally from FoodifyMarket (Our very own FoodifyToken, USD crypto coins)</p>
                </li>
              </ul>
            </section>
          </Stack>
        </Container>
      </FarmCowContainer>
      <TestimonialsContainer>
        <Container>
          <h2>What our shoppers are saying</h2>
          <TestimonialList />
        </Container>
      </TestimonialsContainer>
    </main >
  )
}

const SaveBigContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  gap: 2rem;

  img {
    max-width: 100%;
    /* height: auto; */
  }

  .content {
    width: 50%;
    h1 {
      font-size: clamp(4rem, 4.97vw, 5.375rem);
      margin-bottom: .5rem;
      line-height: 1.33;
    }
    p{
      margin-bottom: 1rem;
      width: 80%;
    }
  }

  @media ${breakPoint.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    
    img {
      max-width: 100%;
      margin: 0 auto;
      display: block;
    }
    .content {
      width: 100%;
      text-align: center;

    p {
      width: 100%;
    }
    } 
  }

  @media ${breakPoint.mobile} {
    .link {
      display: block;
    }

    .content {
      h1 {
        font-size: clamp(2.138rem, 2vw, 2.613rem);
      }
    }
  }
  
`

const BenefitsContainer = styled(Box)`
  
  .vector-bg {
    margin-bottom: -10px;
    display: block;
    width: 100%;
  }
  .content {
    
    text-align: center;
    background-color: #FCF6DC;
    padding-bottom: 4.5rem;
    h2 {
      margin-bottom: 2rem;
      
    }
  }

  .benefits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    & > * {
      margin-bottom: 10px;
    }
    p {
      width: 80%;
    }
  }

`
const DealsContainer = styled(Box)`
  margin-top: 70px;

  .content {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      margin-bottom: 20px;
    }
    p {
      width: 40%;
    }

    @media ${breakPoint.tablet} {
      p {
      width: 80%;
    }
    }
  }
`
const FarmCowContainer = styled(Box)`
 background-color: #FCF6DC;
 margin-top: -2rem;
 padding-bottom: 63px;
  h3 {
    width: clamp(48%, 52%, 52%);
    font-weight: 700;
  }
  
  p {
    width: 40%;
    font-weight: 500;
    margin-bottom: 10px;
    margin-left: 47px;
  }
  li {
    position: relative;
  }
  li img {
    position: absolute;
    top: 7px;
    left: 6px;
  }
  
 .farm-cow-content > * {
  margin-bottom: 20px;
 }

 .farm-cow-img {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  img {
    margin-right: 50px;
  }
 }
 section {
  width: 50%;
 }

 @media ${breakPoint.tablet} {
  .farm-cow-content {
   h2,h3 {
    text-align: center;
    width: auto;
   }
   p {
    width: auto;
   }
  
 }

 .farm-cow-img {
  margin: 38px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 0;
  }
 }

 .farm-cow-content {
  width: 100%;
 }
 }

 @media ${breakPoint.mobile} {
  margin-top: -0.5rem;
  .farm-cow-img {

  img {
    width: 70%;
  }
 }
 }
 
`
const TestimonialsContainer = styled(Box)`

padding: 70px 0;
h2 {
  text-align: center;
  margin: 1.5rem;
}

@media ${breakPoint.mobile} {
  padding: 26px 0;
}
`

const benefits = [
  {
    id: 'benefits-1',
    title: 'Massive savings',
    desc: 'Save as much as 40% on your groceries shopping. Quility produce at the lowest price possible.',
    img: '/benefits/Benefit-1.svg'
  },
  {
    id: 'benefits-2',
    title: 'Massive savings',
    desc: 'Save as much as 40% on your groceries shopping. Quility produce at the lowest price possible.',
    img: '/benefits/Benefit-2.svg'
  },
  {
    id: 'benefits-3',
    title: 'Massive savings',
    desc: 'Save as much as 40% on your groceries shopping. Quility produce at the lowest price possible.',
    img: '/benefits/Benefit-3.svg'
  }

]

export default Home