import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import { Image } from 'react-bootstrap';
import { ButtonProfile, DivProfile, MailProfile, NombreProfile, ProfileDiv, Titulo } from '../styles/profileStyle';

const cookies = new Cookies();


class Profile extends Component {


  cerrarSesion = () => {

    cookies.remove('id', { path: "/" });
    cookies.remove('apellido', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('email', { path: "/" });
    window.location.href = "/login"
  }

  componentDidMount() {
    if (!cookies.get('email')) {
      window.location.href = "/login";
    }
  }

  render() {

    // console.log('id: ' + cookies.get('id'));
    // console.log('apellido: ' + cookies.get('apellido'));
    // console.log('nombre: ' + cookies.get('nombre'));
    // console.log('email: ' + cookies.get('email'));

    return (
      <ProfileDiv className='profile-div'>
        <Titulo>Tu Perfil</Titulo>

        <DivProfile>
          <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318305/Quiz-Reto2/daily-bits-white-logo_zjgubg.png" />
          <br></br>
          <NombreProfile>{cookies.get('nombre') + ' ' + cookies.get('apellido')}</NombreProfile>
          <MailProfile>{cookies.get('email')}</MailProfile>
        <br></br>
        </DivProfile>

        <ButtonProfile onClick={() => this.cerrarSesion()}>Cerrar sesión</ButtonProfile>
        <br></br>
      </ProfileDiv>
    );
  }
}

export default Profile;
