import * as actions from "./actionTypes";


//either function or arrow functions both can be used
export function bugAdded(description){
    return{
        type:actions.BUG_ADDED,
        payload:{
            description:description
        }
    }
}

export const bugRemoved = id =>({
        type:actions.BUG_REMOVED,
        payload:{
            id:id
        }
    }
)

export const bugResolved = id =>({
    type:actions.BUG_RESOLVED,
    payload:{
        id //if name of the property and the value name is same then use short hand syntax
    }
}
)