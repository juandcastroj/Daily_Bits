import { Form, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




export const NavStyle = styled(Nav)`
    background-color: #232E35;
`
export const linkStyle = styled(Link)`
    color: white;
    `

export const FormStyle = styled(Form)`
    color: white;
    background-color: black;
    border-radius: 10px;   
    width: 600px;
`


export const DivForm = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0rem;
    height: 88vh;
`



export const Titulo = styled.h2`
    padding: 0.6rem;
    text-align: center;
    margin: 0;
    font-size: 20px
`
export const RadioStyle = styled(Form.Check)`
    text-align: center;
    padding: 8px;
    font-size: 1.2rem;
    margin: 0.5rem 0.6rem;
    border-color: blue;
    &:hover{
        background-color: gray;
        border-radius: 10px;
        border-color: green
    }


`

export const ButtonStyle = styled(Button)`
    background-color: #7F5AF0;
    border:none;
    margin-left: 20%;
    width: 60%;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0.8rem;
    border-radius: 20px;
    &:hover{
        background-color: gray;
    }
    &:focus{
        outline: none;
        background-color: #5e3370;
    }
`


export const ContainerStyle = styled.div`
color: white;
background-color: black;
border-radius: 10px;
width: 70%;
padding: 2rem;
display: flex;
flex-direction: column;
margin-right: 0;
margin-bottom:0;
align-items: center;

`

