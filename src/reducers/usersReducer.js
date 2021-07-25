const inititalValue = {}

const usersReducer = (state = inititalValue,action)=>{
    switch(action.type){

        case "ADD_USER_DATA" :{
            return {...state,...action.payload}
        }
        case  "Clear_DATA" : {
            return inititalValue
        }
        default : return {...state}
    }
}

export default usersReducer