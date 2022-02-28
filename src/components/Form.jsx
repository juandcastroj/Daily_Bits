import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../helpers/url';
import { useNavigate } from 'react-router-dom'
import '../styles/FormStyle.css'


export const Form = () => {

    const navigate = useNavigate()

    const [register, setRegister] = useState(

        {
            id: "",
            nombre: "",
            apellido: "",
            email: "",
            password: ""
        })

    const { nombre, apellido, email, password } = register


    const handleOnChange = ({ target }) => {

        setRegister({
            ...register,
            [target.name]: target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
       

        setTimeout(() => {
            navigate('/login')
        // (window.location.href = "/login")
        }, 1000)
    }

    const postUser = () => {

        axios.post(url, register)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })

            alert("Tu usuario se ha registrado")
    }



    return (
        <div>
            <form id="formulario" onSubmit={handleSubmit} >
                <br></br>
                <h2>Registro de usuarios</h2>
                <br></br>
                <br></br>
                <hr />
                <div>
                    <label>Nombre</label>
                    <input id="inputName" required type="text" name="nombre" value={nombre} onChange={handleOnChange} />
                </div>
                <br></br>
                <br></br>
                <div>
                    <label>Apellido</label>
                    <input id="inputLastName" required type="text" name="apellido" value={apellido} onChange={handleOnChange} />
                </div>
                <br></br>
                <br></br>
                <div>
                    <label>Email</label>
                    <input id="inputEmail" required type="email" name="email" value={email} onChange={handleOnChange} />
                </div>
                <br></br>
                <br></br>
                <div>
                    <label>Contraseña</label>
                    <input id="inputPassWord" required type="password" name="password" value={password} onChange={handleOnChange} />
                </div>
                <br></br>
                <br></br>
                <div>
                    <button id="btnRegister" onClick={postUser} >Registrarme</button>
                </div>
                <br></br>
                <br></br>
            </form>
        </div>
    )
}