import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


export default function OrganizationPage(props) {
    const [foods, setFoods] = useState([])
    const { name } = useParams();

    let url = "http://localhost:8080/api/inventory/nameSearch/:name"

    // const getFoods = async() => {
    //     try {
    //         const response = await fetch(url)
    //         const jsonData = await response.json()

    //         setFoods(jsonData)

    //     } catch (error) {
    //         console.error(error.message)
    //     }
    // }

    // useEffect(() => {
    //     getFoods()
    // }, [])

    return (
        <div>
        <h1>Hello Peeps, this is {name}</h1>
        <ListGroup as="ol" numbered>
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
            </div>
            <Badge bg="primary" pill>
            14
            </Badge>
        </ListGroup.Item>
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
            </div>
            <Badge bg="primary" pill>
            14
            </Badge>
        </ListGroup.Item>
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
            </div>
            <Badge bg="primary" pill>
            14
            </Badge>
        </ListGroup.Item>
        </ListGroup>
        </div>
    )

    
}