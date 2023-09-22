import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Donat from "../../images/pic.png"
import "./delModal.css"
import Button from '../button/button';


const MyModal = ({ isOpen, setIsModalOpen }) => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      deliveryType: 'pickup',
      address: '',
      floor: '',
      intercom: '',
    });

  const handleSubmit = () => {
   console.log(formData);
   
  };

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);
  
  return (
    <Modal  overlayClassName="modal-overlay" className="modal" isOpen={isOpen}>
        <div className='modal__photo-content'>
            <img src={Donat} alt="Donat" />
        </div>
        <div className='modal__main-content'>
            <form onSubmit={handleSubmit}>
                <h2 className='modal__title'>Delivery</h2>
                <input 
                className='name-input'
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                required 
                />
                <input
                className='phone-input'
                type="text"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone number"
                required 
                />
                <div className="modal__radio-inputs">
                <label className="radio-label">
                    <input
                    className='radio'
                    type="radio"
                    value="pickup"
                    checked={formData.deliveryType === 'pickup'}
                    onChange={() => setFormData({ ...formData, deliveryType: 'pickup' })}
                    />
                    <p className='radio-text'>Pickup</p>
                </label>
                <label className="radio-label">
                    <input
                    className='radio'
                    type="radio"
                    value="delivery"
                    checked={formData.deliveryType === 'delivery'}
                    onChange={() => setFormData({ ...formData, deliveryType: 'delivery' })}
                    />
                    <p className='radio-text'>Delivery</p>
                </label>
                </div>
                {formData.deliveryType === 'delivery' && (
                <>
                    <input 
                    className='address-input'
                    type="text"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Address"
                    required 
                    />
                    <div className='modal__double-input'>
                    <input
                    className='floor-input'
                    type="number"
                    value={formData.floor}
                    onChange={e => setFormData({ ...formData, floor: e.target.value })}
                    placeholder="Floor"
                    min={1}
                    required 
                    />
                    <input
                    className='intercom-input'
                    type="text"
                    value={formData.intercom}
                    onChange={e => setFormData({ ...formData, intercom: e.target.value })}
                    placeholder="Intercom"
                    required 
                    />
                    </div>
                </>
                )}
                <div className='modal__btn-container'>
                <Button buttonText="Make an order" initialColor="#FF7020" hoverColor="#FFAB08" textInitialColor="white" width="300px" />
                </div>
                <button className='close-btn' onClick={() => setIsModalOpen(false)}>X</button>
            </form>
      </div>
    </Modal>
  );
};

export default MyModal;