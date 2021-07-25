import React from 'react'
import { Container, Carousel } from 'react-bootstrap'

const Home = (props) => {
  

    return (
        <div>
            <Container>
                <h2>Home</h2>
                <b>Billing apps or invoicing software offer a myriad of features that make your cumbersome and unpaid invoicing task easy and quick.
                    Right from the creation of tasks, invoice management, accounting, and team management,
                    billing apps can make the job easy for you by automating everything.</b>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://d346xxcyottdqx.cloudfront.net/wp-content/uploads/2016/08/92166049.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Calclations made simpler</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://due.com/wp-content/uploads/2017/08/Invoicing.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://securionpay.com/wp-content/uploads/2016/05/Billing-Cycle-Definition.svg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div >
    )
}

export default Home