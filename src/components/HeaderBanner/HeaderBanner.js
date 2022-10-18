import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from 'lottie-react'
import exams from '../../Assets/exams.json'
import './HeaderBanner.css'


const HeaderBanner = () => {
    return (
        <Container className='container Overflow-x'>
            <Row className="">
                <Col lg={6} md={7} sm={12} xs={12} className=''>
                    
                    <div className='d-flex flex-column justify-content-center align-items-center h-100 px-3 py-2'>
                        <h3 className='text-warning'>Why should you make a quiz?</h3>
                        <p className='text-center'>One word: growth. And there's two kinds of it. <br></br>1) Business growth-entrepreneurs growing by acquiring and retaining customers, and <br></br>2) personal or professional growth-teachers or corporate trainers helping people with new knowledge and skills.</p>
                      </div>
                 
                </Col>
               
                <Col lg={6} md={5} sm={12} xs={12}>
                    <Lottie className=''
                        animationData={exams}
                        loop={true}
                        id="banner-animation"
                    ></Lottie>
                </Col>
           
                
            </Row>
        </Container>
    )
};

export default HeaderBanner;