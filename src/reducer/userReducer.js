
const userReducer = (state = [], action) => {
    
    switch (action.type) {
        case "USER_LOGIN":
            // const obj = "ACCOUNT_LOG";
            const dataLocal = localStorage.setItem("ACCOUNT_LOG",JSON.stringify(action.payload));
            const data = JSON.parse(localStorage.getItem("ACCOUNT_LOG"));
            return data
        default:
            return state
    }
}
export default userReducer