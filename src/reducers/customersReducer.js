
const customersReducer = (state = [],action)=>{

    switch(action.type){

        case 'CUSTOMERS_LIST' : {
            return [...action.payload]
        }

        case "ADD_CUSTOMER_DATA" : {
            return [...state,action.payload]
        }

        case "EDIT_CUSTOMER_DATA" : {
            return state.map((customer)=>{
                if(action.payload._id === customer._id){
                    return {...customer,...action.payload}
                }else{
                    return {...customer}
                }
            }) 
        }

        case  "REMOVE_CUSTOMER_DATA" : {
            return state.filter((customer)=>{
                return customer._id !== action.payload._id
            })
        }

        case "Clear_DATA" :{
            return []
        }

        default : return [...state]
    }
}

export default customersReducer