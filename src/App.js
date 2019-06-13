import React ,{Component} from 'react';

class App extends Component {
  render(){const
     name=this.props.name,
     age=this.props.age;
  return (
    <div>
      <h1>My name:{name}</h1>
      <h2>My age:{age}</h2>
    </div>);}}
export default App;
