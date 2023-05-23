import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PasscodeInput from './components/PasscodeInput';

const password = process.env.REACT_APP_PASSCODE;

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 'todo-1',
      name: "Hi love, I made this special app to show you how much I miss you and can't wait to hold you in my arms again, I loved you the very first time I saw you and I always will ❤️",
      completed: false,
      dateAdded: new Date(),
    },
    { id: 'todo-2', name: 'Sleep', completed: false, dateAdded: new Date() },
    { id: 'todo-3', name: 'Repeat', completed: false, dateAdded: new Date() },
  ]);

  const handlePasscodeSubmit = (passcode) => {
    if (passcode === password) {
      setIsLoggedIn(true);
    } else {
      alert("mmh, u wondering what's in there, if you don't have the password you can't know hehe");
    }
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [
      { ...newTask, dateAdded: new Date() },
      ...prevTasks,
    ]);
  };

  const sortByDate = (newTask) => {
    setTasks((prevTasks) => [
      { ...newTask, dateAdded: new Date() },
      ...prevTasks,
    ]);
  };

  return (
    <div>
      {!isLoggedIn && <PasscodeInput onPasscodeSubmit={handlePasscodeSubmit} />}
      {isLoggedIn && (
        <React.StrictMode>
          <App subject="cutie pie" tasks={tasks} sortArray={sortByDate} />
        </React.StrictMode>
      )}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

reportWebVitals();
