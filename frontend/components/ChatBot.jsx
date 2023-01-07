import { useState } from 'react';
import  styles from '../styles/Chatbot.module.css';
import axios from 'axios';
import { createElement } from 'react';





const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading , setLoading] = useState(false);


  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();
    const res =  await axios.post('http://localhost:4000/message', {
      prompt: message
     });
   
    setResponse(res.data.message);
 
    setMessage('');
    setLoading(false)
  };

  

  return (
     <>
<div className={styles.container}>
    <div  className={styles.chats}><div className={styles.chat}>


  <p className={styles.message}> {loading ? "typing..." : response}</p>

      
      </div></div>
<form  className={styles.form} onSubmit={handleSubmit}>
<input  className={styles.input}  placeholder= 'Say Hello' name='message' value={message}
        onChange={(event) => setMessage(event.target.value)} required />
  <button  className={styles.btn} type="submit" disabled={loading ? true : false}>{loading ? "wait..." : "submit"}</button>
</form>


</div>
     </>
  )
}

export default ChatBot