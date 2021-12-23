import { useEffect } from 'react'
import '../App.js'

const ShowList = ({todos, handleDelete}) =>{
    return(
        <div>
            {todos.map(
                todo => <ShowListDetails todo = {todo} key={todo.id} index = {todo.id} handleDelete = {handleDelete}/>
            )}
        </div>
    )

}

const ShowListDetails = ({todo,index,handleDelete}) =>{
    useEffect(
        ()=>{
            console.log("component mount - side Effect")

            return(
                console.log("component unmount - Cleanup")
            )
        }
    )
    return(
        <div data-index = {todo.index}>
            {todo.work}-{todo.deadline}
            <button type='submit' onClick={(e) => handleDelete(e,index)}>Delete</button>
        </div>
    )
}
export default ShowList;