import React, {useRef, useState} from "react";
import useInput from "./hooks/useInput";
import useBtn from "./hooks/useBtn";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";

function App() {
    // const username=useInput('')
    // const email=useInput('')
    //
    // const ref=useRef();
    // const isOrangeHovering=useHover(ref)

    const [value, setValue] = useState('');
    const debouncedSearch=useDebounce(search,500)


    function fetchTodos(query){
        fetch(`https://jsonplaceholder.typicode.com/todos`)
          .then(response => response.json())
          .then(json => {
              console.log(json)
          })
    }




    function search(query){
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
          .then(response => response.json())
          .then(json => {
              console.log(json)
          })
    }


    const onChange=e=>{
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }


  return (
    <div>


        {todos.map(todo=>
          <div key={todo.id} style={{padding:30,border:'2px solid yellow'}}>
              id: {todo.id}; {todo.title}

          </div>)}




        {/*<input type="text" value={value} onChange={onChange}/>*/}
        {/*<input type="text" placeholder={}/>*/}


      {/*  <List></List>*/}
      {/*<input {...username} type="text"  />*/}
      {/*  <input {...email} type="text"  />*/}
      {/*  <button onClick={()=>console.log(username.value, email.value)}>Click</button>*/}

      {/*  <Hover></Hover>*/}
      {/*  <div ref={ref} style={{width:200,height:200,background:isOrangeHovering? "orange":"orangered"  }}></div>*/}
    </div>
  );
}

export default App;
