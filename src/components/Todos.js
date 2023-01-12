import React, {useState} from 'react'
import  Modal  from './Modal';
import Backdrop from './Backdrop';
function Todos(props){
const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(){
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }
    return(
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}> DELETE</button>
        </div>
        {modalIsOpen ? <Modal closeModal={closeModalHandler}/> : null}
        {modalIsOpen ? <Backdrop closeModal={closeModalHandler}/> : null}
      </div>
    )
}

export default Todos;