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

const ShowListDetails = props =>{
    return(
        <div data-index = {props.index}>
            {props.todo.work}
            <button type='submit' onClick={(e) => props.handleDelete(e,props.index)}>Delete</button>
        </div>
    )
}
export default ShowList;