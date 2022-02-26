import React, { Component } from 'react'
import { ContainerStyle, DivForm } from '../styles/CardQuestion'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {

        return (
            <DivForm>
                <ContainerStyle>
                    <h3>Practica tus conocimientos en la categoria que quieras</h3>

                    
                   <div>
                   <Link to="/questionHTML" className="nav-link"><img src="https://i.ibb.co/g99JvFn/Categorias.png" width="70px" alt="" /></Link>
                   </div>
                   <div   >
                   <Link to="/questionCSS" className="nav-link"><img src="https://i.ibb.co/qY3w0Mn/Categorias-1.png" width="70px" alt="" /></Link>
                    <Link to="/questionJS" className="nav-link"><img src="https://i.ibb.co/kBP4ZDF/Categorias-2.png" width="70px" alt="" /></Link>
                   </div>
                    <div>
                    <Link to="/questionFIGMA" className="nav-link"><img src="https://i.ibb.co/3BW36Kk/Categorias-3.png" width="70px" alt="" /></Link>
                    <Link to="/questionUX" className="nav-link"><img src="https://i.ibb.co/tQLFWT9/Categorias-4.png" width="70px" alt="" /></Link>
                    </div>
                </ContainerStyle>
            </DivForm>
        )
    }
}
