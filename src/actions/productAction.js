import axios from "../config/axiosConfig";
import swal from "sweetalert";


const productsList = (data) => {
   // console.log(data)
    return {
        type: "GET_PRODUCTS_LIST",
        payload: data
    }
}

export const SetGetProducts = (token) => {
    return (dispatch) => {
        axios.get('/products',{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    
                    dispatch(productsList(result))
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}

const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT_DATA",
        payload: data
    }
}

export const SetCreateProduct = (formData, token) => {
    return (dispatch) => {
        axios.post('/products', formData,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                //console.log(result)
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    dispatch(addProduct(result))
                    swal('',"successfully added","success")
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}



export const SetGetSingleProduct = (id, token) => {
    return (dispatch) => {
        axios.get(`/products/${id}`,{
            headers : {
                'Authorization' : `Bearer ${token}`
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



const editProduct = (data) => {
    return {
        type: "EDIT_PRODUCT_DATA",
        payload: data
    }
}

export const SetEditProducts = (id, data, token, handleToggle) => {
    return (dispatch) => {
        axios.put(`/products/${id}`, data,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    swal('','successfully saved',"success")
                    dispatch(editProduct(result))
                    handleToggle()
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}

const removeProduct = (data) => {
    return {
        type: "REMOVE_PRODUCT_DATA",
        payload: data
    }
}

export const SetRemoveProduct = (id, token) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('error')) {
                    alert(result.message)
                } else {
                    dispatch(removeProduct(result))
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}