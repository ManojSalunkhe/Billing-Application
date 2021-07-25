import React, { useState} from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import RemoveCustomer from './RemoveCustomer'
import { useSelector, useDispatch } from 'react-redux'
import { SetGetSingleCustomer } from '../../actions/customerAction'
import EditForm from './EditForm'
import { Button } from 'react-bootstrap'
import { AiTwotoneEdit } from 'react-icons/ai'
import "../../../src/style.css"

const CustomersList = (props) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [toggle, setToggle] = useState(false)
    const [customer, setCustomer] = useState({})

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const customers = useSelector((state) => {
        return state.customers
    })


    const filteredCustomers = customers.filter((customer) => {
        if (customer.name.includes(search))  return customer
    })

    const handleShow = (id) => {
        const token = localStorage.getItem('token')
        dispatch(SetGetSingleCustomer(id, token))
    }

    const handleToggle = () => setToggle(!toggle)

    const handleEdit = (id) => {
        const result = customers.find((ele) => {
            return ele._id === id
        })
        setCustomer(result)
        handleToggle()
    }

    return (
        <div  >
            {
                customers.length > 0 &&
                <div className="customer-table">
                    <h2>Customers List - ({customers.length})</h2>
                    <input type="input" value={search} onChange={handleSearch} placeholder="search" /><hr/>
                    {
                        search.length > 0 ? (
                            <ReactBootstrap.Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredCustomers.map((customer) => {
                                            return (
                                                <tr key={customer._id}>
                                                    <td style={{ cursor: "pointer" }} onClick={() => handleShow(customer._id)}>{customer.name}</td>
                                                    <td>{customer.mobile}</td>
                                                    <td>{customer.email}</td>
                                                    <td><Button onClick={() => handleEdit(customer._id)} variant="secondary"><AiTwotoneEdit />edit</Button></td>
                                                    <td><RemoveCustomer id={customer._id} /></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </ReactBootstrap.Table>
                        ) : (
                            <ReactBootstrap.Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        customers.map((customer) => {
                                            return (
                                                <tr key={customer._id}>
                                                    <td style={{ cursor: "pointer" }} onClick={() => handleShow(customer._id)}>{customer.name}</td>
                                                    <td>{customer.mobile}</td>
                                                    <td>{customer.email}</td>
                                                    <td> <Button onClick={() => handleEdit(customer._id)} variant="secondary"><AiTwotoneEdit />edit</Button></td>
                                                    <td><RemoveCustomer id={customer._id} /></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </ReactBootstrap.Table>
                        )
                    }
                </div>
            }
            <EditForm customer={customer} toggle={toggle} handleToggle={handleToggle} />
        </div>
    )
}

export default CustomersList