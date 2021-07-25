import React from 'react'
import CustomersForm from './CustomersForm'
import { SetCreateCustomer } from '../../actions/customerAction'
import { useDispatch } from 'react-redux'
import '../../style.css'

const AddFrom = (props) => {
    const dispatch = useDispatch()

    const addCustomer = (data) => {
        const token = localStorage.getItem('token')
        dispatch(SetCreateCustomer(data, token))
    }

    return (
        <div >
            <CustomersForm addCustomer= {addCustomer}/>
        </div>
    )

}
export default AddFrom