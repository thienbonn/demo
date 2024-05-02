const reducerHome = (state = [], action) => {
    switch (action.type) {
        case 'articlesGet':
            console.log("acc",action.payload)
            const arr = [];
            const curr = action.payload.map((item, index) => {
                return {
                    type: item.type,
                    customnew:
                        [
                            {
                                containerChild: item.content,
                                titleChild: item.title,
                            }
                        ],
                    id: index + 1
                }
            })
            // console.log("reducer", curr)
            for (var i = 1; i <= curr.length; i++) {
                // console.log(curr)
                arr.push(curr[curr.length - i])
            }
            console.log('action payload', action.payload)
            return action.payload

        default:
            return state
    }
}

export default reducerHome

