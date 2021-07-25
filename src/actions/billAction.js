import axios from "../config/axiosConfig"
import swal from 'sweetalert'

const getBillList = (data) => {
    return {
        type: "GET_BILL_LIST",
        payload: data
    }
}


export const SetGetData = (token) => {

    return (dispatch) => {
        axios.get('/bills', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    console.log(result.message)
                } else {
                    dispatch(getBillList(result))
                    // console.log(result)
                }
            })
    }
}


const addBill = (data) => {
    return {
        type: "ADD_BILL",
        payload: data
    }
}

export const SetPostBill = (data, token, history) => {
    return (dispatch) => {
        axios.post('/bills', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    console.log(result.message)
                } else {
                    swal('Great', 'sucessfully posted  the bill', "success")
                    dispatch(addBill(result))
                    history.push("/billing")
                    // console.log(result)
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const removeBill = (data) => {
    return {
        type: "REMOVE_BILL",
        payload: data
    }
}

export const SetRemoveBill = (id, token) => {

    return (dispatch) => {
        axios.delete(`/bills/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                // console.log(result)
                if (result.hasOwnProperty('error')) {
                    console.log(result.message)
                } else {
                    dispatch(removeBill(result))
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const SetGetSingleBill = (id, token, setToggle, singleBillData) => {

    return (dispatch) => {
        axios.get(`/bills/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    console.log(result.message)
                } else {
                    // signleBillDetails(result)
                    singleBillData(result)
                    setToggle(true)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
