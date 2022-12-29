import React, {useEffect, useRef, useState} from 'react';
import useScroll from "../hooks/useScroll";

const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit=10;
    const parentRef=useRef();
    const childRef=useRef();
    const intersected=useScroll(parentRef,childRef,()=>fetchTodos(page,limit))

    function fetchTodos(page,limit){
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
          .then(response => response.json())
          .then(json => {
              setTodos(prev=>[...prev,...json])
              setPage(prev=>prev+1)
          })
    }

    // useEffect(() => {
    //     fetchTodos(page,limit)
    // }, []);
    //

    return (
      <div ref={parentRef} style={{height:'80vh',overflow:'auto'}}>
          {todos.map(todo=>
          <div key={todo.id} style={{padding:30,border:'2px solid yellow'}}>
              id: {todo.id}; {todo.title}

          </div>)}
          <div ref={childRef} style={{height:20,background:'darkgreen'}}></div>
      </div>
    );
};

export default List;
