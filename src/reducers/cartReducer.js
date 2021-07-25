

const initialValue = []

const cartReducer = (state = initialValue,action)=>{
    switch(action.type){

        case "ADD_DATA" : {
            return [...state,{...action.payload}]
        }

        case "RESET_DATA" :{
            return initialValue
        }

        case "INCREMENT_QUANTITY" : {
           const result = state.map((item)=>{
                if(item.product === action.payload){
                    return {...item,quantity : item.quantity + 1}
                }else{
                    return {...item}
                }
            })
           // console.log(result,'hi')
            return result
        }

        case "DECREMENT_QUANTITY" : {
            const result = state.map((item)=>{
                if(item.product === action.payload && item.quantity >1){
                    return {...item,quantity : item.quantity - 1}
                }else{
                    return {...item}
                }
            })
           // console.log(result,'hi')
            return result
        }

        case "REMOVE_PRODUCT" :{
            const result = state.filter((item)=>{
                return item.product !==action.payload
            })
            return result
        }

        default :{
            return state
        }
    }
}

export  default cartReducer