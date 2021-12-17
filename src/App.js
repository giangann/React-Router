import './App.css';
import { uuid } from 'uuidv4';
import React from 'react';

class App extends React.Component {
  group = {
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

  render(){
    return(
      <div>
        <HeaderPart handleClick = {this.handleClick} name = {this.group.name}/>
        <ContentPart member = {this.group.member}/>
    </div>
    )
    
  };
}

class HeaderPart extends React.Component{
  render(){
    return(
      <div>
        <p > {this.props.name}</p>
        <input type="checkbox" id="item1" name="item" value="Paneer" onClick={this.props.handleClick}/>
      </div>
      
    )
  }
  
}

class ContentPart extends React.Component{
  render(){
    return (
      <div>
        {this.props.member.map(member => 
          <DetailPart key = {uuid()} index = {uuid()} item = {member}/>
        )}
      </div>
    )
  }
}
class DetailPart extends React.Component{
  render(){
    return(
      <div data-index = {this.props.index}>
        <p>{this.props.item.name} - {this.props.item.mssv} - {this.props.key}</p>
        <button onClick={e => e.target.closest(`[data-index="${this.props.index}"]`).remove()}>Delete</button>
      </div>
      
    )
  }
  
}
export default App;
