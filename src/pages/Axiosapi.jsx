import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const Axiosapi = () => {
    const [record, setRecord] = useState([])

    const getUser = async () => {
        let { data } = await axios.get('https://dummyjson.com/products')
        console.log(data.products);
        setRecord(data.products)
    }

    useEffect(() => {
        getUser();
    }, [])
    return (
        <div align="center">
            <h2 align="center">Using Axios</h2>
            <Link to={'/axios'}>
                <button className='homebtn'>Axios Method</button>
            </Link>
            <Link to={'/fetch'}>
                <button className='homebtn'>Fetch Method</button>
            </Link>
            <Container className="d-flex flex-wrap justify-content-center mt-5 col-lg-12">

                {
                    record.map((val) => {
                        return (
                            <Card className='col-lg-3 m-3'>
                                <Card.Img variant="top" src={val.thumbnail} alt={val.title} style={{ width: '100%' }} />
                                <Card.Body>
                                    <Card.Title>{val.title}</Card.Title>
                                    <Card.Text>
                                        {val.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default Axiosapi