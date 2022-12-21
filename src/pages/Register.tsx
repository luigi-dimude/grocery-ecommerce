import React, { useState } from 'react'
import GetStarted_1 from '../page-components/register/GetStarted_1'
import GetStarted_2 from '../page-components/register/GetStarted_2'


const Register = () => {

  const [currentStep, setCurrentStep] = useState(1)

  if (currentStep === 1) {
    return <GetStarted_1 setStep={() => setCurrentStep(2)} />
  }
  return <GetStarted_2 />
}

export default Register