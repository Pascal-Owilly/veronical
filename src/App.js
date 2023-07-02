import React, { useState, useEffect } from 'react';
import us from '../src/img/us.png';
import './App.css';
import Todo from './components/Todo';
import Smile from './components/Smile';
import Special from './components/Special';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import hearts from '../src/img/hearts.jpg';
import hearts2 from '../src/img/hearts2.jpg';
import loveu4 from '../src/img/flower4.jpeg';
import flower2 from '../src/img/flower5.jpeg';
import vera from '../src/img/vera.png';
import love3 from '../src/img/love3.jpg';
import love4 from '../src/img/love4.jpg';
import love_island from '../src/img/love_island.jpg';
import stars from '../src/music/Ed_Sheeran _All_Of_The_Stars.mp3';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const images = [ love3, love4, hearts,  hearts2, flower2, love_island, loveu4,];

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

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalContent, setModalContent] = useState('');

const hearts = [
  'A boy saw a girl and he fell in love with her on that very moment. the girl felt him too. they look like they  are meant to be. Each night the girl left their house to come to the boy , but only for a short time. the  boy could eagerly wait for her outside to see her one last time otherwie he would not sleep that night. the boy wrote her poems and read them to her while holding her in his arms, he missses her laugh, her sexy eyes. He admires how the girl carries confidence to her demeanor and come to him even when someone tries to stop her. the few days they talked they felt like they knew each other their whole life. then they got separated for a very long time promising each other that they would meet again. She gave him her earring and he held it close to his heart. the girl had no idea what she meant to the boy. all she needed was trust but the boy loved her unconditionally. she tried to understand him  though she had doubts that he would leave her for someone else while they were apart. but she didn\'t know the boy keeps his promises and would wait for her to come back regardless of distance and time. She didn\'t know that the boy missed her so much that he occasionally lost focus. sometimes too much that he began to think something was wrong with him. one year was forever for the boy so he kept himself busy to stop thinking  about the girl.  he kept thinking about the taste of her lips, the wamth of her body and her soft skin. how together they look like two souls that can never be separated. how they can be themselves together and how they almost got caught kissing. the way she pays attention makes the boy yearn for more of her. The promise they made to each other is worth the wait. the boy wants the girl to know that she can tell him anything, even the things she can\'t say. They found each other ❤️'
]

const handleClick = () => {
  const compliment = hearts;
  setModalContent(compliment);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};


  return (
    <>
    <header className="App-header" 
style={{
  backgroundImage: `url(${images[currentIndex]})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat',
  transition: 'background-image 1.5s ease', 
}}
    >
<div className="App">

<div className='us' style={greatVibes}> 

  <p style={greatVibes}>
Pascal <img onClick={handleClick} className="vera" src={vera} style={{width:'10%', cursor:'pointer'}} />  Vera <Special />

<div className='modal-overlay modal-hearts' style={{marginLeft:'4.9vh', cursor:'pointer', borderRadius:'20px', marginTop:'50px'}}>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" style={{backgroundColor:'rgb(0,0,0,.8)', borderRadius:'5px', height:'355px', overflow:'scroll'}} onClick={(e) => e.stopPropagation()}>
            <h5 style={{fontFamily:'cursive', textDecoration:'overline'}}>Soulmates</h5>
            <p className='mt-1' style={{fontWeight:'200', marginTop:'2vh', fontSize:'18px', color:'white', fontFamily:'cursive'}}>{modalContent}</p>
            <button className='btn-dismiss' style={{fontSize:'25px'}} onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

    </div>
</p>
<Smile />
<img style={{marginTop:'-2rem'}} src={us} className="App-us rounded__circle" alt="Us against the world" />
</div>
        
        
        
        <div> 
          <div className='container' style={{marginTop:'5vh'}}>
          <audio className='audio-container' src={stars} controls={true} autoPlay={isPlaying} />  
          </div>

        
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
