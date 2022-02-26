import React, { Component } from 'react'
import { Form, ProgressBar } from 'react-bootstrap'
import { questionJS } from '../data/Questionario';
import Cookies from 'universal-cookie';

import { ButtonStyle, DivForm, FormStyle, RadioStyle, Titulo } from '../styles/CardQuestion'

const cookies = new Cookies();

export default class QuestionJS extends Component {
    constructor() {
        super();
        this.state = {
            numberQuestion: 0,
            question: {
                question: "",
                a: "",
                b: "",
                c: "",
                d: "",
                correct: ""
            },
            score: 0,
            answerSelect: ""
        }
    }

    componentDidMount() {
        const currentQuizData = questionJS[this.state.numberQuestion]

        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                d: currentQuizData.d,
                correct: currentQuizData.corrrect
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        if (this.state.numberQuestion < questionJS.length) {
            this.componentDidMount()
        } else {
            console.log(this.state.score);
            alert(cookies.get('nombre')+ " , obtuviste " + this.state.score +" respuestas correctas de 5")
            window.location.href = "/home";
            
        }
    }

    onChanged = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
    }

    render() {
        return (
            <DivForm>
                <FormStyle onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="control-radio" style={{ padding: "4rem" }}>
                    {/* <h2 style={{ textAlign: "center" }}>{this.state.numberQuestion}/{questionJS.length} </h2> */}
                    <ProgressBar  variant="success" max="4" animated now={this.state.numberQuestion} />
                        <Titulo>{this.state.question.question}</Titulo>
                        <RadioStyle
                            type="radio"
                            label={this.state.question.a}
                            value={this.state.question.a}
                            name={'respuestas'}
                            id={`respuesta1`}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.b}
                            value={this.state.question.b}
                            name={'respuestas'}
                            id={`respuesta2`}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.c}
                            value={this.state.question.c}
                            name={'respuestas'}
                            id={`respuesta3`}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.d}
                            value={this.state.question.d}
                            name={'respuestas'}
                            id={`respuesta4`}
                            onChange={this.onChanged}
                        />
                    </Form.Group>
                    <ButtonStyle  type="submit" onClick={() => {
                         this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>
                        COMPROBAR 
                    </ButtonStyle>
                    
                </FormStyle>
            </DivForm>
        )
    }
}