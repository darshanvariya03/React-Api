import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


const Fetch = () => {
    const [record, setRecord] = useState([])

    const getUsers = async () => {
        try {
            const allData = await fetch('https://dummyjson.com/products', {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            let data = await allData.json()

            console.log(data);
            setRecord(data.products)
        } catch (err) {
            console.log(err);
            return false
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div align="center">
            <h2 align="center">Using Fetch Method</h2>
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

export default Fetch