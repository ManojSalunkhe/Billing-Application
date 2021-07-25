import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetGetData } from '../../actions/userAction'
import { Card, Container } from 'react-bootstrap'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import '../../style.css'

const Account = (props) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.users
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        dispatch(SetGetData(token))
    }, [])

    return (
        <div className="account">
            <Container>
                <h2>Account Info</h2>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant = "top" src="https://img.theweek.in/content/dam/week/leisure/society/images/2018/3/17/tom-and-jerry.jpg" />
                    <Card.Body>
                        <Card.Title><CgProfile /> {user.username}</Card.Title>
                        <Card.Text> <MdEmail /> {user.email}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default Account