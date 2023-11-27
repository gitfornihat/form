import React from 'react'
import { useState } from 'react';
const FeedbackForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      comment: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        setSuccessMessage('Forma müvəffəqiyyətlə göndərildi!');
      }
    };
    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z]+$/;
        return nameRegex.test(name);
      };
      const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\+?[0-9]+$/;
        return phoneRegex.test(phone);
      };
      
    return (
        <div>
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Ad:</label>
              <input type="text" id="firstName" required value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }/>
            </div>

            <div>
              <label>Soyad:</label>
              <input type="text" id="lastName" required value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }/>
            </div>
    
            <div>
              <label>Telefon:</label>
              <input type="number" id="phone" required value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }/>  
            </div>

            <div>
              <label>E-mail:</label>
              <input type="email" id="email" required value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }/>
            </div>
    
            <div>
              <label>Şərh:</label>
              <textarea id="comment" value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }/>
            </div>
    
            <button type="submit">Göndər</button>
          </form>
    
          {successMessage && <p className="success">{successMessage}</p>}
        </div>
      );
    };

export default FeedbackForm
