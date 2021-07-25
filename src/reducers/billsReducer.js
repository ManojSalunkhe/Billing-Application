const billsReducer = (state = [],action)=>{
    switch(action.type){

        case "GET_BILL_LIST" : {
            return [...action.payload]
        }

        case "ADD_BILL" : {
            return [...state,action.payload]
        }

        case "REMOVE_BILL" : {
            return state.filter((bill)=>{
                return bill._id !== action.payload._id
            })
        }

        case "Clear_DATA" :{
            return []
        }

        default :{
            return state
        }
    }
}
export default billsReducer