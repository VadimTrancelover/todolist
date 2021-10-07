import './App.css';
import { AddTaskForm , Header, Footer} from './components';

function App() {

  return (
    <div className="wrapper"> 
    <Header />
      <div className="addTaskForm-container"> 
        <AddTaskForm/>
      </div>
      <Footer/>  
    </div>
  );
}

export default App;
