import './App.css';
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { InputLabel,Input, FormControl } from '@mui/material';
import Message from './Message';

function App() {
  const [input, setInput] = useState('')
  console.log(input);
  const [messages, setMessage] = useState([{userName : 'sony' , text:'oke'}, {userName:'nam', text:'oeoeoe'}, {userName:'aaa', text:'pho'}])
  console.log(messages);
  const [userName, setUserName]  = useState('')

  useEffect(() =>{
    setUserName(prompt('nhập tên'))
  }, [])

  const sendMessage = (event) =>{
    event.preventDefault()
      setMessage([...messages, {userName:userName, text:input}])
      setInput('')
  }
  return (
    <div className="App">
      <h1>Toilanome</h1>
      <h2>{userName}</h2>

    <form onSubmit={sendMessage}>

    <FormControl>
    <InputLabel>Email address</InputLabel>
    <Input value={input} onChange={(event) => setInput(event.target.value)} />
    <Button disabled={!input} variant='contained' color='primary' >Send Message</Button> 
    
   </FormControl>

      
    </form>
      

      {messages.map(message =>(
        <Message userName={userName} message={message}/>
      ))}
    </div>
  );
}

export default App;
