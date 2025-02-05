export const initialState = {
    total: 0,
    products: []
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                products: action.payload
            }
        case "remove":
            return {
                ...state,
                products: action.payload
            }
        case "total price":
            return {
                ...state,
                total: action.payload
            }
        default: throw Error("Cannot match any case in reducer.")
    }
}

export default storeReducer;