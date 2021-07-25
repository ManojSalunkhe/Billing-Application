
export const addData = (data)=>{
    return{
        type : "ADD_DATA",
        payload : data
    }
}

export const resetData = ()=>{
    return{
        type : "RESET_DATA"
    }
}

export const incrementQunatity = (id)=>{
    return{
        type : "INCREMENT_QUANTITY",
        payload : id
    }
}

export const decrementQunatity = (id)=>{
    return{
        type : "DECREMENT_QUANTITY",
        payload : id
    }
}

export const removeProduct = (id)=>{
    return{
        type : "REMOVE_PRODUCT",
        payload : id
    }
}