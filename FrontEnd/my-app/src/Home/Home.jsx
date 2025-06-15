import React,{ useState}  from 'react';
import './Home.css'

const Home = () => {

  const [text,settext] =useState("")
  return (
    <div className='heading'>
        <title>To Do List</title>  
     <h1>To do list</h1>
      <textarea
      style={style.textarea}
        placeholder='write some thing'
        value = {text}
        onChange={(e)=>settext(e.target.value)}
       />
       <button type='submit'>Add</button>
      
    </div>
  )
}
const style ={
 
  textarea: {
    width: '40%',
    height: '150px',
    padding: '10px',
    fontSize: '16px',
    color:'white',
    border : '5px solid white'
    
  },
 
}

export default Home
