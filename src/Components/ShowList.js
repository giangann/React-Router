import Checkbox from 'antd/lib/checkbox/Checkbox'
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
    const chooseFav = (e,index) =>{
        // console.log("favourite choose")
        console.log(e.target(`[data-index="${index}"]`).value)
    }
    return(
        <div data-index = {todo.index}>
            {todo.work}-{todo.deadline}
            <button type='submit' onClick={(e) => handleDelete(e,index)}>Delete</button>
            <Checkbox onChange={chooseFav}></Checkbox>
        </div>
    )
}
export default ShowList;