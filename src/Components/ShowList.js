import '../App.js'

const ShowList = ({todos}) =>{
    return(
        <div>
            {todos.map(
                todo => <ShowListDetails todo = {todo} key={todo.id}/>
            )}
        </div>
    )

}

const ShowListDetails = props =>{
    return(
        <div>
            {props.todo.work}
        </div>
    )
}
export default ShowList;