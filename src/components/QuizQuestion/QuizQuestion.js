import React from 'react';
import { useLoaderData } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import QuizOption from '../QuizOption/QuizOption';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = () => {
    const quizData = useLoaderData();
    console.log("QuizData",quizData)
    
    const handleChange = (e, id)=>{
        const findQuizAnswer = quizData.data.questions.find(question => question.id === id)
        const value = e.target.value;
        if (findQuizAnswer.correctAnswer === value) {
            toast('CORRECT ANSWER !!', {
                className: "text-success fw-bold fs-5",
                bodyClassName: "grow-font-size",
                progressClassName: "fancy-progress-bar",
            });
            

        }
        else {
            toast(`WRONG ANSWER !`);
        }
    }
   
    return (
        <Container>
            <Row>
                <h3 className='text-center text-warning py-4'>Start Your Self Test For <span className='fw-bold text-dark'>{quizData.data.name}</span></h3>
            </Row>
            <Row className='row-cols-lg-2 row-col-md-2 row-cols-sm-1 row-cols-1 g-4 py-5'>
                {
                    quizData.data.questions.map((quiz) => {
                        return (
                            <QuizOption key={quiz.id} quiz={quiz} handleChange={handleChange}></QuizOption>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default QuizQuestion;