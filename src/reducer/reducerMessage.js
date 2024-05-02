

const ReducerMessage = (state = [],action)=>{
    // console.log("action",action.payload)
    switch (action.type) {
        case "UPMESSAGER":
            const states = action.payload
            const newState = []
            for (var i = 1; i <= states.length; i++) {
                // console.log("length",states.length)
                // console.log("state",states.length)
                newState.push(states[states.length - i])
            }
            console.log("actionss", newState)
            return newState
        default:
            return state
    }
}
export default ReducerMessage