import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

console.clear();

const Title = ({todoCount}) => {
  return (
    <div>
       <div className="title">

          <h1>For Organizing Thoughts:
          </h1>
 <p>Click Item to Delete.</p>  
 <p>Enter to Send.</p>  
 <p>Reload to See.</p>  

</div>
</div>
  );
}

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="form-control col-md-12" placeholder="Type." ref={node => {
        input = node;
      }} />
      <br/>
       <button>Send</button> 
      <br />
    </form>
  );
};

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<a href="todo" className="list-group-item"onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo className="title "todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<div className="list-group " style={{marginTop:'30px'}}>
  <p>1){todoNode[7]}</p>
<p> 2){todoNode[8]}</p>
<p> 3){todoNode[9]}</p>
<p> 4){todoNode[10]}</p></div>);
}

// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = '//5b42da2463839a00144c015d.mockapi.io/aimee/todo'
  }
  
  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data});
      });
  }
  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.setState({data: this.state.data});
          this.state.data.push(res.data);
          this.state.data.push(todo);

       });
  }
 
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl+'/'+id);
    this.setState({data: remainder});
    
  }

  sendForm() {
    window.location.reload();
   
  }
  render(){
    // Render JSX
    return (
      <div>
     
      <div className="title"/>

       
        <Title todoCount={this.state.data.length}/>
        <hr/>

        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <hr/>

        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
       <hr/>
       <p>Click Confirm after Send or Enter.</p>
       <button type="button" onClick={ this.sendForm.bind(this) }>
            <span>Confirm</span>
        </button>
      </div>
    );
  }
}
ReactDOM.render(<TodoApp />, document.getElementById('container'));