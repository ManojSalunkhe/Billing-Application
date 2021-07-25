import React from 'react'
import CustomersForm from './CustomersForm'
import { Modal, Button } from 'react-bootstrap'
import {GiCancel} from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import {SetEditCustomer} from '../../actions/customerAction'
import '../../style.css'


const EditForm = (props) => {

    const dispatch = useDispatch()

    const {toggle, handleToggle ,customer} = props 

    const editCustomer = (data)=>{
        const token = localStorage.getItem('token')
        dispatch(SetEditCustomer(customer._id,data, token,handleToggle))
    }

    return (
        <div >
            <Modal show={toggle} onHide={handleToggle} className="editModal">
                <Modal.Body>
                    <CustomersForm customer={customer} handleToggle={handleToggle} editCustomer={editCustomer}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleToggle}><GiCancel/>cancel</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EditForm