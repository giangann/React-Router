import './App.css';
import { uuid } from 'uuidv4';

const App = ()=> {
  const group = {
    name: 'Group 1',
    member: [
      {
        name:'An',
        mssv: 20195946
      },
      {
        name:'Minh Anh',
        mssv: 20195947
      }
    ]
  }

  const handleClick =(e)=> {
    console.log(e.target.innerHTML);
    console.log(typeof(e.target));

  }
  return (
    <div>
      <HeaderPart handleClick = {handleClick} name = {group.name}/>
      <ContentPart member = {group.member}/>
    </div>
  );
}

const HeaderPart = props =>{
  return(
    <div>
      <p onClick={() => {console.log("hello")}}> {props.name}</p>
      <input type="checkbox" id="item1" name="item" value="Paneer" onClick={props.handleClick}/>
    </div>
    
  )
}

const ContentPart = props=>{
  return (
    <div>
      {props.member.map(member => 
        <DetailPart key = {uuid()} index = {uuid()} item = {member}/>
      )}
    </div>

  )
}
const DetailPart = props =>{
  return(
    <div data-index = {props.index}>
      <p>{props.item.name} - {props.item.mssv} - {props.key}</p>
      <button onClick={e => e.target.closest(`[data-index="${props.index}"]`).remove()}>Delete</button>
    </div>
    
  )
}
export default App;
