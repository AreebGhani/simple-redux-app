
const initialState = 0;

const ChangeNumber = (state = initialState, actions) => {

    switch(actions.type) {

        case "INCREMENT": return state + actions.payload;

        case "DECREMENT": return state - actions.payload;

        default: return state;

    }

}

export default ChangeNumber;