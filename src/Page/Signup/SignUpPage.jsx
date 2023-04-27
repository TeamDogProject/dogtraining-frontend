import React from 'react'
import SignUpUser from './SignUpUser'
import SignUpDog from './SignUpDog' 
import { Card } from '@mui/material'

 
function SignUpPage(){
  return (
    
    <div className='signUpPage'>

    <SignUpUser />
    <SignUpDog />

    </div>
    
  )
  }

export default SignUpPage