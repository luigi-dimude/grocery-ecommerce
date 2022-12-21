import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Vector from '../assets/Vector-login.png';
import Logo from '../assets/Logo.svg';
import PasswordIcon from '../assets/Password-icon.svg';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import { StyledButton } from '../styles/StyledComponents';
import FormHelperText from "@mui/material/FormHelperText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { breakPoint } from '../styles/BreakPoints';
import { Link } from "react-router-dom"


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(3).max(50).required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    if (data.password.length < 10) {
      setError("password", {
        type: "on submit",
        message: "Password should be longer!"
      });
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
          <h3>Sign in</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <StyledInput
              fullWidth
              type='text'
              placeholder="@email.com"
              id="email"
              size="small"
              {...register("email")}
            />
            <HelperText id="password-helper-text">
              {errors.email?.message?.toString()}
            </HelperText>
            <label htmlFor="password">Password</label>
            <StyledInput
              fullWidth
              type={showPassword ? 'text' : 'password'}
              id="password"
              size="small"
              endAdornment={<InputAdornment position="end"><img src={PasswordIcon} alt="password icon" onClick={() => setShowPassword(!showPassword)} className="password-icon" /></InputAdornment>}
              {...register("password")}
              error={!!errors.password}
              aria-describedby="password-helper-text"
            />
            <HelperText id="password-helper-text">
              {errors.password?.message?.toString()}
            </HelperText>
            <Stack justifyContent='space-between' direction='row' alignItems='center'>
              <span><Checkbox disableRipple sx={{ padding: '0px' }} /> Remember me</span>
              <span>Forgot password?</span>
            </Stack>
            {/* <input type="submit" /> */}
            <StyledButton style={{ marginTop: '40px', width: '100%' }} type='submit'>Sign In</StyledButton>
            <p className='register'>Dont have an account? <Link to='/register'>Get Started</Link></p>
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
  width: 405px;
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

    .register{
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