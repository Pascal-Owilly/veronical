import React, { useEffect, useRef, useState } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
  ref.current = value;
  });
  return ref.current;
  }

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const wasEditing = usePrevious(isEditing);

  const [dateAdded, setDateAdded] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName('');
    setEditing(false);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    props.deleteTask(props.id);
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  



  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          <span style={{fontStyle:'italic', fontFamily:'cursive', fontSize:'14px'}}>New name for</span> {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          // ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
          <br />
          <span  style={{fontSize:'12px', color:'white', fontFamily:'cursive', fontStyle:'italic'}}>
          Date Added: {new Date(props.currentDate).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })} {new Date(props.currentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
          </span>
        </label>
      </div>
      <div className="btn-group ">
        <button style={{fontSize:'14px', cursor:'pointer', padding:'.5rem', borderRadius:'20px', fontWeight:'bold'}} type="button" className="btn" onClick={() => setEditing(true)}   >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button style={{fontSize:'12px', cursor:'pointer', padding:'.5rem', borderRadius:'20px', fontWeight:'bold'}} type="button" className="btn btn__danger" onClick={handleDelete}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );



  return (
    <>
      <li className="todo stack-small">
        {isEditing ? editingTemplate : viewTemplate}
      </li>

      {showConfirmation && (
        <div>
          <p style={{fontSize:'12px', color:'yellow', fontWeight:'bold'}}>You want to delete me, are you heartless?</p>
          <button style={{fontSize:'12px', cursor:'pointer', border:'1px solid #fff', padding:'.7rem', borderRadius:'20px'}} onClick={handleCancelDelete}>no</button>&nbsp;&nbsp;&nbsp;
          <button style={{fontSize:'12px', cursor:'pointer', border:'1px solid yellow', padding:'.7rem', borderRadius:'20px'}} onClick={handleConfirmDelete}> yes</button>
          
        </div>
      )}
    </>
  );
}

export default Todo;
    