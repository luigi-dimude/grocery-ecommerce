import Container from '../shared-components/Container_2';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Logo from '../assets/Logo.svg';
import IndeedIcon from '../assets/Indeed-icon.svg';
import TwitterIcon from '../assets/Twitter-icon.svg';
import InstaIcon from '../assets/Instagram-icon.svg';
import { breakPoint } from '../styles/BreakPoints';



const Footer = () => {
  const StyledBox = styled(Box)`
    background-color: ${props => props.theme.palette.primary.main};
    min-height: 20rem;
    
    p {
      font-size: clamp(0.7875rem, 0.979vw, 0.9625rem);
      color: ${props => props.theme.palette.mode === 'dark' ? '#000' : '#000'}
    }

    .copyright-mobile {
      display: none;
    }

    .footer-wrapper {
      display: flex;
      width: 100%;
      min-height:  20rem;
      padding: 30px 0;

      .left-section {
        width: 100%;
      }
      .right-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        li {
          margin-bottom: 20px;
        }
        h4 {
          font-weight: 600;
          margin-bottom: 20px;
          font-size: 1rem;
        }
      }
      @media ${breakPoint.mobile} {
        flex-direction: column;
        .copyright-main-view {
          display: none;
        }
        .copyright-mobile {
          display: block;
        }
        .left-section {
          margin-bottom: 2rem;
      }
      .social-icons {
        margin: 20px 0 30px 0;
      }
      }
    }

  `
  return (
    <footer>
      <StyledBox>
        <Container>
          <div className="footer-wrapper">
            <section className="left-section">
              <Stack direction='column' justifyContent='space-between' sx={{ height: '100%' }}>
                <span> <img src={Logo} alt="Foodify Market" /></span>
                <p className='copyright-main-view'>Copyright © foodify Market. All rights reserved.</p>
              </Stack>
            </section>
            <section className="right-section">
              <Stack direction={{ sm: 'row' }} flexWrap='wrap' gap={{ md: 8, sm: 2 }}>
                <ul>
                  <h4>Info</h4>
                  <li><p>About us</p></li>
                  <li><p>Become a supplier</p></li>
                  <li><p>Deliver for us</p></li>
                </ul>
                <ul>
                  <h4>Others</h4>
                  <li><p>Refer a friend</p></li>
                  <li><p>Careers</p></li>
                  <li><p>FAQs</p></li>
                </ul>
                <ul>
                  <h4>Contact us</h4>
                  <li><p>08012345678</p></li>
                  <li><p>foodifymarket@mail.com</p></li>
                </ul>
              </Stack>
              <Stack direction='row' gap={4} className='social-icons'>

                <img src={IndeedIcon} alt="Indeed icon" />
                <img src={TwitterIcon} alt="Twitter icon" />
                <img src={InstaIcon} alt="Insta icon" />
              </Stack>
              <p className='copyright-mobile'>Copyright © foodify Market. All rights reserved.</p>
            </section>
          </div>
        </Container>
      </StyledBox>
    </footer >
  )
}

export default Footer