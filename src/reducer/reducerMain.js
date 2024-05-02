
const reducerMain = (state = [], action) => {
    // console.log("test",action.payload)
    switch (action.type) {
        case "GETDATA":
            return action.payload
        default:
            return state
    }
}
export default reducerMain