import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({ quiz, handleChange }) => {
    console.log(quiz.question)
    const quizCorrectAnswer = (e) => {
        toast(`Correct Answer : ${quiz.correctAnswer} `, {
            className: "text-warning fw-bold fs-6",
            bodyClassName: "grow-font-size",
            progressClassName: "fancy-progress-bar",
        });
    }
    return (
        <Col>
            <Card style={{height:'420px'}} className=''>
                <Card.Header style={{height:'180px'}} className="d-flex justify-content-between align-items-center">
                    <p>
                        {quiz.question}
                    </p>
                    <h5 > <EyeIcon onClick={quizCorrectAnswer} className="" style={{ height: '25px', cursor: 'pointer' }} /></h5>
                </Card.Header>
                <ToastContainer />
                <Card.Body>
                    {
                        quiz.options.map((option) => {
                            return (
                                <div>


                                    <div class="form-check">
                                        <input className="form-check-input my-2 d-block"
                                            type="radio"
                                            name={quiz.id}
                                            id="a"
                                            value={option}

                                            onChange={(e) =>handleChange(e, quiz.id)}
                                        
                                        />{option}
                                        <ToastContainer/>
                                        
                                    </div>
                                   
                                </div>
                            )
                        })
                    }

                </Card.Body>
               
            </Card>
        </Col>
    );
};

export default QuizOption;