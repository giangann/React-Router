import { MockTask } from "../MockTask"
export default function reducer(state= {todoList:MockTask, value:''}, action){
    switch (action.type){
        case "ON_CHANGE":
            return{
                ...state,
                value:action.payload.value
            }
        default:
            return state
    }
}

