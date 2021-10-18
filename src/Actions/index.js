
export const Increment = (num) => {

    return{
        
        type: "INCREMENT",

        payload: num
    
    }

}

export const Decrement = (num) => {
    
    return{
        
        type: "DECREMENT",

        payload: num
    
    }

}