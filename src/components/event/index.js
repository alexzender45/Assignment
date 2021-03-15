import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import {Link}  from 'react-router-dom'
import './style.css'


export default function MediaCard() {
const [details, setDetails] = useState([])
const [likes, setLikes] = React.useState([])
const [dislikes, setDislikes] = React.useState([])
useEffect(() => {
        fetch('https://indapi.kumba.io/webdev/assignment')
        .then(result => result.json())
        .then(response => {
            setDetails(response.user)
            setLikes(response.user.likes)
            setDislikes(response.user.dislikes)
        })
    }, [])

  return (
      <Container style = {responsive}>
      <Row>
      <Col sm={4}>
    <Card style={{ width: 'auto' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/dloddsbxf/image/upload/v1554329349/IMG_20190108_165704.jpg" style={{height:400}}/>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      {details.name}
    </Card.Text>
    <Card.Text>
      {details.about}
    </Card.Text>
    <Card.Text>
      You can count on me for delicious meals
    </Card.Text>
    <Link to='/items'><Button variant="primary">View Items Summary Page</Button></Link>
  </Card.Body>
</Card>
</Col>
<Col sm={5}>
    <Card style={{ width: 'auto' }}>
  <Card.Body>
    <Card.Title>{details.name}'s Details</Card.Title>
    <Card.Text>
      <b>Address: </b>{details.address}
    </Card.Text>
    <Card.Text>
      <b>Phone: </b>{details.phone}
    </Card.Text>
    <Card.Text>
    <b>Liked Dishes</b>
    {likes.map((item) =>
    <li key={item}>{item}</li>)}
    </Card.Text>
    <Card.Text>
    <b>Disliked Dishes</b>
    {dislikes.map((item) =>
    <li key={item}>{item}</li>)}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
  );
}

const responsive = {
        marginTop: 30,
        display: 'flex',
        flexWrap: 'wrap'
}