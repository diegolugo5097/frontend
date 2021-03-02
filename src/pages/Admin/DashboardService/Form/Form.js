import React, { useState, useEffect, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from 'react-bootstrap';

import { createService, updateService } from "../../../../actions/services";

const Form = ({ currentId, setCurrentId }) => {
  const [error, setError] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalStyles={
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '30em',
    transform: 'translate(-50%, -50%)'
  }
  const [postData, setPostData] = useState({ 
    name: "",
    description: "",
    price: "",
  });

  const service = useSelector((state) =>
    currentId ? state.services.find((p) => p._id === currentId) : null
  );

 

  const dispatch = useDispatch();

  useEffect(() => {
    if (service) setPostData(service);
  }, [service]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateService(currentId, postData));
      clear();
    }
    dispatch(createService(postData));
    clear();
    handleClose();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: "",
      description: "",
      price: "",
 
    });
  };

  return (
<>
    <Button variant="primary" onClick={handleShow}>
    Launch demo modal
  </Button>

  <Modal show={show} onHide={handleClose} animation={false} style={modalStyles}>
    <Modal.Header closeButton>
      <Modal.Title>Registrar servicio</Modal.Title>
    </Modal.Header>
    <form onSubmit={handleSummit}>
      <div className="card">
        
        <div className="card-body">
          <div className="form-group">
            <input
              name="name"
              value={postData.name}
              placeholder="Nombre servicio"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              value={postData.description}
              placeholder="Descripción"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              name="price"
              type="number"
              value={postData.price}
              placeholder="Precio"
              className="form-control"
              min="0"
              onChange={(e) =>
                setPostData({ ...postData, price: e.target.value })
              }
            />
          </div>
    
         
  
        </div>
        <div className="card-footer">
          <div className="btn-group">
            <button 
              className={currentId ? "btn btn-warning" : "btn btn-primary"}
              type="submit"
            >
              {currentId ? "Editar" : "Agregar"}
            </button>
            
            <button 
              className="btn btn-warning" 
              type="submit"
            >
                cancelar
            </button>
          </div>
        </div>
      </div>
    </form>
   
    
   
  </Modal>
  </>
   
  );
};

export default Form;
