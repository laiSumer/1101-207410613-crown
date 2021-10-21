import {useState} from 'react'
import Modal_13 from '../components/Modal_13';
import Backdrop_13 from '../components/Backdrop_13';

function Todo_13(props) {
    const [showModal, setShowModal] = useState();
    
    function showModalHandler(){
        setShowModal(true);
    }

    function closeModalHandler(){
        setShowModal(false);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler} >Delete</button>
                </div>
           </div>
           {showModal && <Backdrop_13 onClose={closeModalHandler}/>}
           {showModal && <Modal_13 text='Are you sure?' onClose={closeModalHandler}/>}
        </div>
    );
}

export default Todo_13;

