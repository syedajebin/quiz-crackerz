import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import { useLoaderData } from "react-router-dom";
import CourseList from '../CourseList/CourseList';
import './Home.module.css'

const Home = () => {
    const quizData=useLoaderData()
    return (
        <Container>
            <Row>
                <HeaderBanner></HeaderBanner>
            </Row>
            <Row className='row-cols-lg-4 g-3 row-cols-md-2 row-cols-sm-1 row-cols-1 py-4'>
                {
                    quizData.data.map((data) => {
                        return (
                            <CourseList data={data} key={data.id}></CourseList>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default Home;