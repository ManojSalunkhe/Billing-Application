
const productsReducer = (state = [] ,action)=>{
    switch(action.type){

        case "GET_PRODUCTS_LIST" : {
            return [...action.payload]
        }

        case "ADD_PRODUCT_DATA" : {
            return [...state,action.payload]
        }

        case "EDIT_PRODUCT_DATA" : {
          return state.map((product)=>{
              if(product._id === action.payload._id){
                  return {...product,name : action.payload.name,price : action.payload.price}
              }else{
                  return {...product}
              }
          })  
        }

        case "REMOVE_PRODUCT_DATA" : {
            return state.filter((product)=>{
                return product._id !== action.payload._id
            })
        }

        case "Clear_DATA" :{
            return []
        }

        default : return [...state]
    } 
}

export default productsReducer