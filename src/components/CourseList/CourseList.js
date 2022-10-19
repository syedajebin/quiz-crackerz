import React from 'react';
import Col from 'react-bootstrap/Col';
import './CourseList.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const CourseList = ({ data }) => {
    console.log("Course list ",data)
    return (
        <Col className=''>
         
             
            <Card style={{}} className=''>
                    <Card.Img className='img-fluid bg-dark' src={data.logo} />
                    <Card.Footer>
                    <Card.Title className='fw-bold fs-3'>{data.name}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold'>Question : {data.total}</p>
                        <Link to={`/quiz/${data.id}`}>
                            <Button variant="danger">Start</Button>
                        </Link>
                    </div>
                    </Card.Footer>
                </Card>
          
        </Col>
    );
};

export default CourseList;