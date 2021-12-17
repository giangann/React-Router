import './App.css';
import { uuid } from 'uuidv4';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {status: true}
  }

  handleOnOff =()=>{
    this.setState({status: !this.state.status})
  } 

  //nếu để dạng bên dưới thì sẽ không chạy, (phải để function có dạng callback)
  // mã lỗi: TypeError: Cannot read properties of undefined (reading 'setState')

  // handleOnOff (){
  //   this.setState({status: !this.state.status})
  // } 

  

  render(){
    return(
      <div>
        <button onClick={this.handleOnOff}>{this.state.status?"ON":"OFF"}</button>
      </div>
    )
  }
}
export default App;
