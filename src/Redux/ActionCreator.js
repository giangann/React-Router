
export const OnChange = (value) => {
    return {
        type: "ON_CHANGE",
        payload:{
            value:value,
        }
    }
}