import React, { useState,useEffect ,useRef } from 'react';

function TodoForm(props){
    const [input,setInput] = useState(props.edit ? props.edit.value:'');

    const InputRef=useRef(null)
    useEffect(()=> {
        InputRef.current.focus()
    })


    const handleChange = e =>{
        setInput(e.target.value)
    }

    const hundleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text : input
        })
        setInput('');
    };
    return(
        <form className='todo-form' onSubmit={hundleSubmit}>
            
            {props.edit ? (<> <input
              type='text'
             placeholder='Update' 
             value={input} 
             name='text' 
             className='add-input'
             onChange={handleChange}
             ref={InputRef}
             />
            <button className='todo-button'>Update</button></> )
            :
           (<><input
              type='text'
             placeholder='Add a to do' 
             value={input} 
             name='text' 
             className='add-input'
             onChange={handleChange}
             ref={InputRef}
             />
            <button className='todo-button'>Add todo</button></>)
 }
            
        </form>
    );
}
export default TodoForm 