import React, { useEffect } from 'react'
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Vector from '../../assets/Vector-login.png';
import Logo from '../../assets/Logo.svg';
import OutlinedInput from '@mui/material/OutlinedInput';
// import StyledButton from '../shared-components/Button';
import { StyledButton2 as StyledButton } from '../../styles/StyledComponents';
import FormHelperText from "@mui/material/FormHelperText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { breakPoint } from '../../styles/BreakPoints';
import { Link } from "react-router-dom"


interface RegisterProps {
  setStep: () => void;
}

const Login = ({ setStep }: RegisterProps) => {



  const schema = yup.object().shape({
    location: yup.string().min(2).max(50).required("Location is required"),
    email: yup.string().min(3).max(50).email('Invalid email').required('Email is required'),
    phoneNumber: yup.string().matches(/^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/gm, 'Phone number is not valid').required('Phone number is required'),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {

    let data: any = sessionStorage.getItem('register')

    if (data) {
      data = JSON.parse(data)

      for (const key in data) {
        setValue(key, data[key])
      }
    }
  }, [])

  const onSubmit = (data: any) => {
    console.log(data);
    if (data.location.length < 3) {
      setError("password", {
        type: "on submit",
        message: "Invalid email"
      });

    }
    else {
      sessionStorage.setItem('register', JSON.stringify(data))
      setStep()
    }

  };

  console.log(errors);
  return (
    <Wrapper direction='column' justifyContent='space-between' alignItems='center'>
      <div className='top-div'></div>
      <LoginCard>
        <Header justifyContent='center' alignItems='center'>
          <img src={Logo} alt="Logo" />
        </Header>
        <Content direction='column'>
          <h3>Get started with Foodify Market</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <>
              <label htmlFor="location">Location</label>
              <StyledInput
                fullWidth
                type='text'
                placeholder="e.g. Ajah"
                id="location"
                size="small"
                {...register("location")}
              />
              <HelperText>
                {errors.location?.message?.toString()}
              </HelperText>
            </>
            <>
              <label htmlFor="email">Email</label>
              <StyledInput
                fullWidth
                type='text'
                placeholder="@email.com"
                id="email"
                size="small"
                {...register("email")}
              />
              <HelperText>
                {errors.email?.message?.toString()}
              </HelperText>
            </>
            <label htmlFor="phoneNumber">Phone Number</label>
            <StyledInput
              fullWidth
              type='text'
              id="phoneNumber"
              size="small"
              placeholder="1234567890"
              {...register("phoneNumber")}
            />
            <HelperText>
              {errors.phoneNumber?.message?.toString()}
            </HelperText>
            <StyledButton style={{ marginTop: '22px', width: '100%' }} type='submit'>Continue</StyledButton>
            <p className='login'>Already have an account? <Link to='/login'>Login</Link></p>
          </Form>
        </Content>
      </LoginCard>
      <ImgWrapper><img src={Vector} alt="backgroung vector image" style={{ width: '100%' }} /></ImgWrapper>
    </Wrapper >
  )
}

const Wrapper = styled(Stack)`
  background-color: #FCF6DC;
  height: 100vh;
  overflow: hidden;


  @media ${breakPoint.tablet} {
    background-color: #FFF;

    .top-div {
      display: none;
    }
  }
  `

const LoginCard = styled(Stack)`
  min-width: 573px;
  /* max-height: 555px; */
  background-color: #FFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 100px 0;

  @media ${breakPoint.tablet} {
    width: 100%;
    box-shadow: none;
    margin: 10px 0;
  }
  `

const Header = styled(Stack)`
  height: 90px;
  width: 100%;
  padding: 32px 0;
  border-bottom: 1px solid #B5B5B5;
  img {
    height: 32px;
  }
  `

const Content = styled(Stack)`
  padding: 25px 40px 40px 40px;

  h3 {
    text-align: center;
    font-weight: 600;
  }
  `
const ImgWrapper = styled('div')`
    width: 100%;
    @media ${breakPoint.tablet} {
      display: none;
  }

  `
const StyledInput = styled(OutlinedInput)`

  fieldset {
    border: 1px solid #5E5E5E;
    border-radius: 5px;
  }
  input {
    &::placeholder {
    color: #5E5E5E;
  }
  }
  `


const Form = styled('form')` 
    margin-top: 25px;
    width: 100%;

    .login {
      font-size: 0.875rem;
      text-align: center;
      margin-top: 30px;

      a {
        font-size: 14px;
        font-weight: 600;
        color: #17691D;
        text-decoration: none;
        margin-left: 4px;
      }
    }
    label {
      display: block;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 5px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
    }
    .password-icon {
      cursor: pointer;
    }
  `

const HelperText = styled(FormHelperText)`

  color: red;

margin-bottom: 20px;
`

export default Login