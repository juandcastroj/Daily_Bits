import React, { useEffect } from 'react'
import Cookies from 'universal-cookie';
import { Image } from 'react-bootstrap';
import { ButtonProfile, DivProfile, MailProfile, NombreProfile, ProfileDiv } from '../styles/profileStyle';
import { Separator } from '../styles/styleAuth';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();


export default function Profile() {

  const navigate = useNavigate()

   const cerrarSesion = () => {

    cookies.remove('id', { path: "/" });
    cookies.remove('apellido', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('email', { path: "/" });
    navigate('/login')
  }


    useEffect(() => {
      if(!cookies.get('email')){
          navigate('/login')
      }
  })

  return (
    <ProfileDiv className='profile-div'>
    <DivProfile>
      <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318305/Quiz-Reto2/daily-bits-white-logo_zjgubg.png" />
      <br></br>
      <Separator />
      <NombreProfile>{cookies.get('nombre') + ' ' + cookies.get('apellido')}</NombreProfile>
      <Separator />
      <MailProfile>{cookies.get('email')}</MailProfile>
    <br></br>
    </DivProfile>
    <br></br>
    <ButtonProfile onClick={() => cerrarSesion()}>Cerrar sesión</ButtonProfile>
    <br></br>
  </ProfileDiv>
  )
}