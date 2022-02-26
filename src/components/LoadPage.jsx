import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


export const ContFirst =styled.div`
    height:100vh;
    background-color:#7F5AF0;
    background-image: url(https://res.cloudinary.com/sarapalacio01/image/upload/v1645318305/Quiz-Reto2/daily-bits-white-logo_zjgubg.png);
    background-repeat: no-repeat;
    background-position: center;
`


export default function LoadPage() {

  const navigate = useNavigate()

    setTimeout(() => {
     
      navigate('/login')
      
    },3000)

  return (
    <ContFirst>
    </ContFirst>
  )
}