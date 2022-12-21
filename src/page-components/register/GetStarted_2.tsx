import React, { useState, useEffect } from 'react'
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Vector from '../../assets/Vector-login.png';
import Logo from '../../assets/Logo.svg';
import PasswordIcon from '../../assets/Password-icon.svg';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
// import StyledButton from '../shared-components/Button';
import { StyledButton2 as StyledButton } from '../../styles/StyledComponents';
import FormHelperText from "@mui/material/FormHelperText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { breakPoint } from '../../styles/BreakPoints';
import { Link } from "react-router-dom"
import { string } from 'yup/lib/locale';



const GetStarted2 = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [sessionData, setSessionData] = useState([])


  const schema = yup.object().shape({
    deliveryAddress: yup.string().min(2, 'Delivery address must be at least 2 characters').max(50).required("Delivery address is required"),
    password: yup.string().min(3).max(50).required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    let seshData: any = sessionStorage.getItem('register')
    setSessionData(JSON.parse(seshData))

  }, [])

  const arrayEquals = (a: Array<string>, b: Array<string>) => {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }


  const onSubmit = (data: any) => {
    console.log(data);


    const expectedKeys = ['location', 'email', 'phoneNumber', 'phoneNumber2']


    const keys = [...Object.keys(sessionData)]

    console.log('here', keys);

    if (arrayEquals(keys, expectedKeys)) {
      console.log('data', data);
      console.log('keys', keys);
      alert('submitted')

    }
    else {
      console.log('next');

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
              <label htmlFor="deliveryAddress">Delivery Address</label>
              <StyledInput
                fullWidth
                type='text'
                placeholder="e.g. House 1, road 2 ..."
                id="location"
                size="small"
                {...register("deliveryAddress")}
              />
              <HelperText>
                {errors.deliveryAddress?.message?.toString()}
              </HelperText>
            </>
            <>
              <label htmlFor="password">Password</label>
              <StyledInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                id="password"
                size="small"
                endAdornment={<InputAdornment position="end"><img src={PasswordIcon} alt="password icon" onClick={() => setShowPassword(!showPassword)} className="password-icon" /></InputAdornment>}
                {...register("password")}
              />
              <HelperText>
                {errors.password?.message?.toString()}
              </HelperText>
            </>
            <>
              <label htmlFor="confirm-password">Confirm Password</label>
              <StyledInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                id="confirm-password"
                size="small"
                {...register("confirmPassword")}
              />
              <HelperText>
                {errors.confirmPassword?.message?.toString()}
              </HelperText>
            </>

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

export default GetStarted2