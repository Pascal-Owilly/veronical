import React, { useState, useRef, useEffect } from 'react';
import us from '../src/img/us.png';
import './App.css';
import Todo from './components/Todo';
import Smile from './components/Smile';
import Special from './components/Special';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import hearts from '../src/img/hearts.jpg';
import hearts2 from '../src/img/hearts2.jpg';
import loveu2 from '../src/img/loveu2.jpg';
import loveu3 from '../src/img/loveu3.jpg';
import loveu4 from '../src/img/loveu4.jpg';
import liveu5 from '../src/img/loveu5.jpg';
import vera from '../src/img/vera.png';
import love from '../src/img/love.jpg';
import love2 from '../src/img/love2.jpg';
import love3 from '../src/img/love3.jpg';
import love4 from '../src/img/love4.jpg';
import love5 from '../src/img/love5.jpg';
import love6 from '../src/img/love6.jpg';
import love_island from '../src/img/love_island.jpg';
import { Carousel } from 'react-bootstrap';
import promise from '../src/music/promise.mp3';
import waiting from '../src/music/waitingforu.mp3';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const images = [love_island, hearts2, hearts, love5, loveu4, love, love3, love4];

function App(props) {

  const [tasks, setTasks] = useState([]);

  // const [tasks, setTasks] = useState(() => {
  //   const storedTasks = localStorage.getItem('tasks');
  //   return storedTasks ? JSON.parse(storedTasks) : [];
  // });

  const [filter, setFilter] = useState('Active');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  function addTask(name) {
    const newTask = { id: `todo-${Date.now()}`, name, completed: false };
    setTasks([newTask, ...tasks]);

    const currentDate = new Date();
    setCurrentDate(currentDate.toISOString());

    localStorage.setItem('tasks', JSON.stringify([newTask, ...tasks]));
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });

    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

    const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      currentDate={currentDate}
    />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
    key={name} 
    name={name}
    isPressed={name===filter}
    setFilter={setFilter}
    />
    ))

  const subject = props.subject;
  const paragraphs = {
  }
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun}`;

  // music

const [isPlaying, setIsPlaying] = useState(false);
const toggleMusic = () => {
  setIsPlaying((prevState) => !prevState);
};

const greatVibes = {
  fontFamily:'Great_Vibes',
}

  return (
    <>
    <header className="App-header" 
    style={{
      backgroundImage: `url(${images[currentIndex]})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'repeat',
      // minHeight: '100vh',
      transition: 'backgroundImage 5s easeInOut',

    }}
    >
<div className="App">

<div className='us' style={greatVibes}> 

  <p style={greatVibes}>
Pascal <img className="vera" src={vera} style={{width:'10%'}} />  Vera <Special />
</p>
<Smile />
</div>
        <img src={us} className="App-logo rounded__circle" alt="logo" />
        
        
        <div> 
        <audio className='audio-container' src={waiting} controls={true} autoPlay={isPlaying} />  
        
    </div>
    
        <p className="App-link text-dark" target="_blank">
        </p >
        <p>{paragraphs.title}</p>
        <div>
          <Form addTask={addTask} currentDate={currentDate}/>
          
          </div>
        <div className="filters btn-group stack-exception">
          {filterList}  
      </div>

<h5 id="list-heading">{headingText}</h5>
<ul
role="list"
className="todo-list stack-large stack-exception"
aria-labelledby="list-heading">
{taskList}
</ul>
    </div>
    </header>
    </>
  );
}

export default App;
