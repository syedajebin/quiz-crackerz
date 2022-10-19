import React from 'react';
import { useLoaderData } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import QuizOption from '../QuizOption/QuizOption';

const QuizQuestion = () => {
    const quizData = useLoaderData();
    
    const handleChange = (event, x)=>{
        
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