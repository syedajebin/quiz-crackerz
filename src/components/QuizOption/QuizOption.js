import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const QuizOption = ({ quiz }) => {
    console.log(quiz.question)
    return (
        <Col>
            <Card style={{height:'420px'}} className=''>
                <Card.Header style={{height:'150px'}}>
                    <p>
                        {quiz.question}
                    </p>
                </Card.Header>
                <Card.Body>
                    {
                        quiz.options.map((option) => {
                            return (
                                <div>


                                    <div class="form-check my-1   my-3">
                                        <input className="form-check-input"
                                            type="radio"
                                            name={quiz.id}
                                            id="a"
                                            value={option}

                                            onChange={(e) => quiz.handleChange(e, quiz.id)}
                                        //  onChange={(e)=>handleChange(e)}
                                        />{option}
                                        
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