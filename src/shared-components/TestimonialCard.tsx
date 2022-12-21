import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/material/styles";
import Open_quo from '../assets/Open-quotation.svg';
import Close_quo from '../assets/Close-quotation.svg';
import { breakPoint } from '../styles/BreakPoints';

interface TestimonialProps {
  img_src: string;
  testimonial: string;
  client_name: string;
}

const TestimonialCard = ({ img_src, testimonial, client_name }: TestimonialProps) => {
  return (

    <StyledCard elevation={4}>
      <img src={img_src} alt="testimonial img" className='testimonial-img' />
      <CardContent className='card-content' sx={{ paddingBottom: 0 }}>
        <span className='paragraph-wrapper'>
          <img src={Open_quo} alt="lime" className='open-quotation-mark' />
          <p>{testimonial}</p>
          <img src={Close_quo} alt="lime" className='close-quotation-mark' />
        </span>
        <h3>{client_name}</h3>
      </CardContent>
    </StyledCard>

  )
}

const StyledCard = styled(Card)`
background-color: #FFF;
color: #000;
width: 340px;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
border-radius: 5px;
/* margin: 20em; */

.testimonial-img {
  width: 100%;
  object-fit: cover;
  max-height: 210px;
}
.card-content {
  
  padding:30px 34px;

  .paragraph-wrapper {
    position: relative;
    p {
    font-size: 0.875rem;
    /* width: 90%; */
    margin: auto;
    }
    .open-quotation-mark {
      position: absolute;
      top: 11px;
      left: -23px;
    }
    .close-quotation-mark {
      position: absolute;
      bottom: 5px;
      right: 2px;
    }
  }


h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
}

}

@media ${breakPoint.mobile} {
  width: 272px;
  .card-content {
    .paragraph-wrapper {
      p {
        font-size: 0.75rem;
      }
    }
  
  }
}
`

export default TestimonialCard