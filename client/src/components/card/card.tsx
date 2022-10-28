import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ModalForm from '../modal/modal';
import ModalAcomodacao from '../modal/modalAcomodacao';

function CardLink(props: any) {
    return (

        <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={props.img} />

            <Card.Body>

                <Card.Title>{props.title}</Card.Title>

                <Card.Text>{props.desc}</Card.Text>
    
            </Card.Body>

            <ListGroup className="list-group-flush">

                <ListGroup.Item>Quantidade de camas de solteiro: {props.camaSolt}</ListGroup.Item>

                <ListGroup.Item>Quantidade de camas de casal: {props.camaCasal}</ListGroup.Item>

                <ListGroup.Item>Quantidade de suítes: {props.suítes}</ListGroup.Item>

                <ListGroup.Item>Quantidade de garagens: {props.garagem}</ListGroup.Item>

                <ListGroup.Item>Climatização: {props.clima}</ListGroup.Item>

            </ListGroup>

            <Card.Body>

                <ModalForm 
                    button='Reservar!' 
                    title='Reserve para um cliente!' 
                    body={ <ModalAcomodacao /> }
                />

            </Card.Body>

        </Card>
    );
}

export default CardLink;