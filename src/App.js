import './App.css';
import Header from './component/Header'
import Todos from './component/Todos';
import Footer from './component/Footer';
import { useEffect, useState } from 'react';
import AddTodo from './component/AddTodo';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = {};
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
    // {
    //   sno : 1 ,
    //   title : "go to the market ",
    //   desc : "You need to go market to get this job done"
    // },
    // {
    //   sno : 2 ,
    //   title : "go to the mall ",
    //   desc : "You need to go market to get this job done"
    // },
    // {
    //   sno : 3 ,
    //   title : "go to the sabjimandi ",
    //   desc : "You need to go market to get this job done"
    // }
  

  const addTodo = (title, desc) => {
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
     sno = todos[todos.length-1].sno+1 ;
    }
    const myTodo ={
      sno : sno ,
      title : title,
      desc : desc ,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  let onDelete = (todo) => {
    console.log("i am ready to delete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    
  }
  return (
    <>
    <Header title="Todo List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
