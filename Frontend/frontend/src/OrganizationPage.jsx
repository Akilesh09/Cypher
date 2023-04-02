import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import BasicExample from './Navigation';


export default function OrganizationPage(props) {
    const [foods, setFoods] = useState(
        [
            {
                name:'Samosa',
                description: `A fried pastry with a savoury filling, including
                 ingredients such as spiced potatoes, onions, and peas.`,
                quantity: 29
            },
            {
                name: 'Kurkure',
                description: `Spiced crunchy puffcorn snacks made up of rice,
                 lentil and corn`,
                quantity: 33
            },
            {
                name: 'Momos',
                description: `Steamed filled dumpling`,
                quantity: 11
            },
            {
                name: 'Gulab Jamun',
                description: `Fried dough balls that are soaked in a sweet,
                 sticky sugar syrup`,
                quantity: 19
            }
        
        ]
    )
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
        <div className='App'>
            <BasicExample></BasicExample>
            <h1>{name}</h1>
            <ListGroup as="ol" numbered>
                {foods.map(food => (
                    <ListGroup.Item as='li' className="d-flex justify-content-between align-items-start">
                        <div className="ms-2">
                            <div className="fw-bold">
                                {food.name}
                            </div>
                            {food.description}
                        </div>
                        <Badge bg="primary" pill>
                            {food.quantity}
                        </Badge>
                    </ListGroup.Item>
                ))}
            
            </ListGroup>
        </div>
    )

    
}