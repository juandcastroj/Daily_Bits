import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../helpers/url";
import Cookies from 'universal-cookie';
import {
  DivAuth,
  Header,
  Logo,
  Form,
  Label,
  DivLink,
  Input,
  Separator,
  ButtonGoogle,
  DivForm
} from "../styles/styleAuth";
import { Button } from "react-bootstrap";

const cookies = new Cookies();


const Login = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState( {
      email: '',
      password: ''
  })

  const handleChange= e=>{
      setForm({
              ...form,
              [e.target.name]: e.target.value
      });
  }

  const iniciarSesion = async() => {
      
    // console.log('form', form)
      await axios.get(url, {params: {email: form.email, password: form.password}})

      .then(response=>{
          // console.log('response.data', response.data)
          return response.data;
      })

      .then(response=>{
          if(response.length>0){
              let respuesta = response[0];
              // console.log('respuesta', respuesta)
              // console.log(respuesta.id);
              cookies.set('id', respuesta.id, {path: "/"});
              cookies.set('apellido', respuesta.apellido, {path: "/"});
              cookies.set('nombre', respuesta.nombre, {path: "/"});
              cookies.set('email', respuesta.email, {path: "/"});
              alert(`¡ Bienvenid@, ${respuesta.nombre} !`);
              navigate('/home');
              //window.location.href="/RetoFinal-Sprint2/home";
          }else{
              alert('Correo o contraseña incorrectos');
          }
      })
      .catch(error=>{
          console.log(error);
      })
  }

  useEffect(() => {
      if(cookies.get('email')){
          navigate('/home')
      }
  })
  

  return (
    <div><DivAuth>
      <Header>
        <Logo src="https://i.ibb.co/KqLxw0v/Logo.png" alt="Logo" />
        <h1>Iniciar sesión</h1>
      </Header>
      
     
      <DivForm>
        <ButtonGoogle>
          <img src="https://i.ibb.co/XC3nx0B/Buttons.png" alt="google" />
          Continuar con Google</ButtonGoogle>
        <Separator />

        <Form action="" >

          <Label htmlFor="inputEmail">
            Correo electrónico
            <Input
              type="email"
              name="email"
              id="inputEmail"
              placeholder="Ingrese su correo electrónico"
              onChange={handleChange}
              required
            />
          </Label>

          <Label htmlFor="inputPassword">
            Contraseña
            <Input
              type="password"
              name="password"
              id="inputPassword"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
              required
            />
          </Label>

          <Button variant="success"  onClick={iniciarSesion}>Iniciar Sesion</Button>
        </Form>
      </DivForm>

      <DivLink>
        <Link to="/form" style={{ color: "green"}}>
          ¿Olvidaste tu contraseña?
        </Link>
        <br></br>
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/form" style={{ color: "green" }}>
            Registrate
          </Link>
        </p>
      </DivLink>
      
    </DivAuth></div>
  )
}

export default Login
