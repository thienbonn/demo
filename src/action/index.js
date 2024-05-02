export const getData = (data)=>{
    // console.log("test",data);
    return {
        type: "GETDATA",
        payload: data
    }
}
export const getMessager = (data)=>{
    // console.log("test",data);
    return {
        type: "UPMESSAGER",
        payload: data
    }
}
export const SignIn = (account)=>{
    // console.log("actionA:: ",account)
    return {
        type: "USER_LOGIN",
        payload: account
    }
}
export const  articlesNew = (articles)=>{
    // console.log("actionA:: ",articles)
    return {
        type : "articlesGet",
        payload: articles
    }
}