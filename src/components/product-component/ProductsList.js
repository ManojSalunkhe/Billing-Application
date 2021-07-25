import React, { useState } from 'react'
import EditProduct from './EditProduct'
import RemoveProduct from './RemoveProduct'
import { useSelector, useDispatch } from 'react-redux'
import { SetGetSingleProduct } from '../../actions/productAction'
import { Card, Container, Row, Col, CardGroup, Button } from 'react-bootstrap'
import { AiTwotoneEdit } from 'react-icons/ai'

const ProductsList = (props) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [product, setProduct] = useState({})
    const [toggle, setToggle] = useState(false)

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const products = useSelector((state) => {
        return state.products
    })
    // console.log(products)

    const filteredProducts = products.filter((product) => {
        if (product.name.toLowerCase().includes(search)) return product
    })

    const handleShow = (id) => {
        const token = localStorage.getItem('token')
        dispatch(SetGetSingleProduct(id, token))
    }

    const handleToggle = () => setToggle(!toggle)

    const handleEdit = (id) => {
        const result = products.find((ele) => {
            return ele._id === id
        })
        setProduct(result)
        handleToggle()
    }

    return (
        <div>{
            products.length > 0 &&
            <div className="produc-list" >
                <Container>
                    <h2>Products List - ({products.length})</h2>
                    <input type="input" value={search} onChange={handleSearch} placeholder="search" /><hr />
                    {
                        search.length > 0 ? (
                            <CardGroup>
                                <Row >{
                                    filteredProducts.map((product) => {
                                        return (
                                            <Col key={product._id} >
                                                <Card border="info" style={{ width: "15rem" }} >
                                                    <Card.Body>
                                                        <Card.Img variant="top" src="https://www.farmacapsulas.com/wp-content/uploads/2017/03/blue_white_capsules.jpg" />
                                                        <Card.Title style={{ cursor: "pointer" }} onClick={() => handleShow(product._id)}>{product.name}</Card.Title>
                                                        <Card.Text>{product.price}</Card.Text>
                                                        <Button onClick={() => handleEdit(product._id)}><AiTwotoneEdit />Edit</Button>
                                                        <RemoveProduct id={product._id} />
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Button onClick={() => handleEdit(product._id)} variant="secondary"><AiTwotoneEdit />Edit</Button>
                                                        <RemoveProduct id={product._id} />
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }</Row>
                            </CardGroup>
                        ) : (
                            <CardGroup>
                                <Row>{
                                    products.map((product) => {
                                        return (
                                            <Col key={product._id}>
                                                <Card border="info" style={{ width: "15rem" }}>
                                                    <Card.Body>
                                                        <Card.Img variant="top" src="https://www.farmacapsulas.com/wp-content/uploads/2017/03/blue_white_capsules.jpg" />
                                                        <Card.Title style={{ cursor: "pointer" }} onClick={() => handleShow(product._id)}>{product.name}</Card.Title>
                                                        <Card.Text>{product.price} ₹</Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Button onClick={() => handleEdit(product._id)} variant="secondary"><AiTwotoneEdit />Edit</Button>
                                                        <RemoveProduct id={product._id} />
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                                </Row>
                            </CardGroup>
                        )
                    }
                </Container>
            </div>
        }
            <EditProduct product={product} handleToggle={handleToggle} toggle={toggle} />
        </div>
    )
}

export default ProductsList