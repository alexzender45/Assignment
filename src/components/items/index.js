import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Media, Card, Button } from 'react-bootstrap';
import {Link}  from 'react-router-dom'


export default function Items(props) {
const [details, setDetails] = useState([])
const [restaurant, setRestaurant] = React.useState([])
const [items, setItems] = React.useState([])
const [items2, setItems2] = React.useState([])
const [items3, setItems3] = React.useState([])
const [items4, setItems4] = React.useState([])
useEffect(() => {
        fetch('https://indapi.kumba.io/webdev/assignment')
        .then(result => result.json())
        .then(response => {
            setRestaurant(response.restaurant)
            setItems(response.items[0])
            setItems2(response.items[1])
            setItems3(response.items[2])
            setItems4(response.items[3])
            setDetails(response.user)
        })
    }, [])

  return (
      <Container>
      <Row>
      <Col sm={9}>
      <h2>Order Summary Page</h2>
      <Card>
      <Media>
  <img
    width={80}
    height={80}
    className="mr-3"
    src="https://image.shutterstock.com/z/stock-photo-modern-restaurant-267091382.jpg"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h4>{restaurant.name} Restaurant</h4>
    <h5><b>Restaurant Details</b> </h5>

    <p><b>Street: </b>{restaurant.street}</p>
    <p><b>City: </b>{restaurant.city}</p>
    <p><b>State: </b>{restaurant.state}</p>
    <p><b>Zipcode: </b>{restaurant.zipcode}</p>
    <Link to='/'><Button variant="primary">Back To Profile</Button></Link>
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="https://res.cloudinary.com/dloddsbxf/image/upload/v1554329349/IMG_20190108_165704.jpg"
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{details.name} one of our best customer from Bangalore</h5>
        <h6>{details.name}'s oder from {restaurant.name}</h6>
        <Card 
        text='dark'
        variant="success"
        >
            <Card.Title>
        <h5><b>Item 1</b></h5>
        </Card.Title>
        <p><b> Name: </b>{items.name}</p>
        <p><b> Category: </b>{items.category}</p>
        <p><b> Price: </b>{items.price}</p>
        <p><b> Currency: </b>{items.currency}</p>
        <p><b> Tax_Pct: </b>{items.tax_pct}</p>
        <p><b> Quantity: </b>{items.quantity}</p>
        <p><b>Total Bill for Item 1 = </b>{items.price * items.quantity + 15}{items.currency}</p>
        <Button variant="primary">Check Out and Pay</Button>
        </Card>
    <h4 style={{marginTop: 20}}> Second Order </h4>
        <Card 
        text='dark'
        variant="success"
        >
            <Card.Title>
        <h5><b>Item 2</b></h5>
        </Card.Title>
        <p><b> Name: </b>{items2.name}</p>
        <p><b> Category: </b>{items2.category}</p>
        <p><b> Price: </b>{items2.price}</p>
        <p><b> Currency: </b>{items2.currency}</p>
        <p><b> Tax_Pct: </b>{items2.tax_pct}</p>
        <p><b> Quantity: </b>{items2.quantity}</p>
        <p><b>Total Bill for Item 1 = </b>{items2.price * items2.quantity + 25}{items.currency}</p>
        <Button variant="primary">Check Out and Pay</Button>
        </Card>
        <h4 style={{marginTop: 20}}> Third Order </h4>
        <Card 
        text='dark'
        variant="success"
        >
            <Card.Title>
        <h5><b>Item 3</b></h5>
        </Card.Title>
        <p><b> Name: </b>{items3.name}</p>
        <p><b> Category: </b>{items3.category}</p>
        <p><b> Price: </b>{items3.price}</p>
        <p><b> Currency: </b>{items3.currency}</p>
        <p><b> Tax_Pct: </b>{items3.tax_pct}</p>
        <p><b> Quantity: </b>{items3.quantity}</p>
        <p><b>Total Bill for Item 1 = </b>{items3.price * items3.quantity + 12.5}{items.currency}</p>
        <Button variant="primary">Check Out and Pay</Button>
        </Card>
        <h4 style={{marginTop: 20}}> Fourth Order </h4>
        <Card 
        text='dark'
        variant="success"
        >
            <Card.Title>
        <h5><b>Item 4</b></h5>
        </Card.Title>
        <p><b> Name: </b>{items4.name}</p>
        <p><b> Category: </b>{items4.category}</p>
        <p><b> Price: </b>{items4.price}</p>
        <p><b> Currency: </b>{items4.currency}</p>
        <p><b> Tax_Pct: </b>{items4.tax_pct}</p>
        <p><b> Quantity: </b>{items4.quantity}</p>
        <p><b>Total Bill for Item 1 = </b>{items4.price * items4.quantity + 6.25}{items.currency}</p>
        <Button variant="primary">Check Out and Pay</Button>
        </Card>
        <h4>Total Bill = {items4.price * items4.quantity + 6.25 + items3.price * items3.quantity + 12.5 + items2.price * items2.quantity + 25 + items.price * items.quantity + 15}{items.currency}</h4>
      </Media.Body>
    </Media>
  </Media.Body>
</Media>
</Card>
</Col>
</Row>
</Container>
  )
}