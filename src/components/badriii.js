import React, { useState } from 'react';
import axios from 'axios';
import './badriii.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Badriii({ showPopup, setShowPopup }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    traveldate: '',
    durationofstay: '',
    member: '',
    checked: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetchData();
    setFormData({
      name: '',
      email: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      traveldate: '',
      durationofstay: '',
      member: '',
      checked: false
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/form", formData);
      if (response.data) {
        console.log('Data submitted successfully:', response.data);
      } else {
        console.error('Unexpected response format or empty response');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {showPopup && (
        <div className='formdiv'>
          <button className="close-btn" onClick={() => setShowPopup(false)}>
            <i className="fas fa-times"></i>
          </button>
          <form className="row g-3 w" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobile" className="form-label">Mobile</label>
              <input type="text" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your Mobile Number" required />
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} placeholder="Enter your City" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <select id="state" className="form-select" value={formData.state} onChange={handleChange} required>
                <option value="">Choose...</option>
                <option value="State1">State1</option>
                <option value="State2">State2</option>
                <option value="State3">State3</option>
                {/* Add other states as necessary */}
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" value={formData.zip} onChange={handleChange} placeholder="Enter your Zip" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="traveldate" className="form-label">Travel date</label>
              <input type="date" className="form-control" id="traveldate" value={formData.traveldate} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="durationofstay" className="form-label">Duration of stay</label>
              <input type="text" className="form-control" id="durationofstay" value={formData.durationofstay} onChange={handleChange} placeholder="Enter duration of stay" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="member" className="form-label">Member</label>
              <input type="number" className="form-control" id="member" value={formData.member} onChange={handleChange} required />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checked" checked={formData.checked} onChange={handleChange} />
                <label className="form-check-label" htmlFor="checked">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Badriii;
