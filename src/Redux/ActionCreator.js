
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