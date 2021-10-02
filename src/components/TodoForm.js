import React, { useState,useEffect ,useRef } from 'react';

function TodoForm({
    edit,onSubmit
}){
    const [input,setInput] = useState(edit ? edit.value:'');

    const InputRef=useRef(null)
    useEffect(()=> {
        InputRef.current.focus()
    })


    const handleChange = e =>{
        setInput(e.target.value)
    }

    const hundleSubmit = e =>{
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random()*1000),
            text : input
        })
        setInput('');
    };
    return(
        <form className='todo-form' onSubmit={hundleSubmit}>
            
            {edit ? (<> <input
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