import axios from "../config/axiosConfig";
import swal from 'sweetalert'

const customersList = (data) => {
    return {
        type: 'CUSTOMERS_LIST',
        payload: data
    }
}

export const SetGetCustomers = (token) => {
    return (dispatch) => {
        axios.get('/customers', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    dispatch(customersList(result))
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}


const addCustomer = (data) => {
    return {
        type: "ADD_CUSTOMER_DATA",
        payload: data
    }
}


export const SetCreateCustomer = (formData, token) => {
    return (dispatch) => {
        axios.post('/customers', formData,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        },)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    dispatch(addCustomer(result))
                    swal('Great', "successfully added", "success")
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}


export const SetGetSingleCustomer = (id, token) => {
    return (dispatch) => {
        axios.get(`/customers/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    swal(result.name)
                }
            })
    }
}

const editCustomer = (data) => {
    return {
        type: "EDIT_CUSTOMER_DATA",
        payload: data
    }
}


export const SetEditCustomer = (id, data, token, handleToggle) => {
    return (dispatch) => {
        axios.put(`/customers/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    swal('', 'successfully saved', "success")
                    dispatch(editCustomer(result))
                    handleToggle()
                }

            })
            .catch((error) => {
                alert(error)
            })
    }
}

const removeCustomer = (data) => {
    return {
        type: "REMOVE_CUSTOMER_DATA",
        payload: data
    }
}

export const SetRemoveCustomer = (id, token) => {
    return (dispatch) => {
        axios.delete(`/customers/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    dispatch(removeCustomer(result))
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}