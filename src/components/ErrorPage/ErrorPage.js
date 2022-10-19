import React from 'react';
import { useRouteError } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Lottie from 'lottie-react'
import errorAnim from '../../Assets/error.json'
import Header from '../Header/Header';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <Container>
            <Header></Header>
            <Row className=''>
                <div style={{height:400}} className='error-animation d-flex justify-content-center align-items-center'>
                    <Lottie className='w-50'
                        animationData={errorAnim}
                        loop={true}
                        id="error-animation"
                    ></Lottie>
                </div>
                <div className='error-text'>
                    <h1 className='text-center'>Opps!!  </h1>
                    {
                        error && (
                            <div className='d-flex justify-content-center '>
                                <h6 className='mx-1 fw-bold '>{error.statusText || error.message}</h6>
                                <h6 className='text-danger fw-bold'>{error.status}</h6>
                            </div>
                        )
                    }
                </div>
            </Row>
        </Container>
    );
};

export default ErrorPage;