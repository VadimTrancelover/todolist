import React from 'react';
import './App.css';
import { AddTaskForm , Header, Footer} from './components';

function App() {

  const [time, setTime] = React.useState('')

  const onSetTime = () => {
    setTime(new Date().toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }))
  }

  setInterval(onSetTime, 30000)


  React.useEffect(() => {
    onSetTime()
  },[])


  return (
    <div className="wrapper"> 
    <Header time = {time}/>
      <div className="addTaskForm-container"> 
        <AddTaskForm onSetTime = {onSetTime}/>
      </div>
      <Footer/>  
    </div>
  );
}

export default App

