
export const OnChange = (value) => {
    return {
        type: "ON_CHANGE",
        payload:{
            value:value,
        }
    }
}

export const HandleAdd = (newTodoName,deadline) =>{
    return {
        type: "HANDLE_ADD",
        payload:{
            value: newTodoName,
            deadline:deadline
        }
    }
}

export const HandleCheck = (id, value) =>{
    return{
        type: "HANDLE_CHECK",
        payload:{
            value:value,
            id: id
        }
    }
}

export const HandleDelete = (id) =>{
    return{
        type: "HANDLE_DELETE",
        payload:{
            id:id
        }
    }
}