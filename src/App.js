import './App.css';
import { uuid } from 'uuidv4';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {status: true}
  }

  handleOnOff (){
    this.setState(this.status = !this.state.status)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleOnOff}>{this.state.status?"ON":"OFF"}</button>
      </div>
    )
  }
}
export default App;
