import { Button } from 'react-bootstrap'
import styled from "styled-components";

export const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0rem;
    color: #fff;
    background-color: black;
    width: 100hv;
`
export const Titulo = styled.h2`
    padding: 1rem;
    margin-top: 2rem;
    font-size: 22px;
    font-family:'Nunito', sans-serif; 
    font-weight: bold; 
    font-style: normal;
    line-height: 30px;
    text-align: left;
    color: #fff;
    margin-left:45%
`
export const ButtonProfile = styled(Button)`
    background-color: #7F5AF0;
    color: #fff;
    border: none;
    width: 35%;
    font-size: 16px;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    margin-left:35%;
    font-weight: bold;
    &:hover{
        background-color: #fff;
        color: #7F5AF0
    }

`
export const NombreProfile = styled.h2`
    font-size: 24px;
    font-family:'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
`
export const MailProfile = styled.h3`
    margin-top: 0;
    font-size: 14px;
    font-family:'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    text-align: center;
`

export const ProfileDiv = styled.div`

    background-color: black;
    padding: 10%;
    padding-bottom: 25%
`