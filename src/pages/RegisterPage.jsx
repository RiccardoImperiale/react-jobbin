import { useState } from 'react';
import axios from 'axios';
import '../assets/css/register.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        company_name: '',
        company_description: '',
        company_phone: '',
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/register', formData, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log('Registration successful', response);
            })
            .catch(error => {
                console.error('There was an error registering!', error);
            });
    }

    return (
        <div className="container">
            <h2 className="title">Register</h2>
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <div className='input_group'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" id='name' name="name" placeholder="Name" onChange={handleChange} required />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email' name="email" placeholder="Email" onChange={handleChange} required />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' name="password" placeholder="Password" onChange={handleChange} required />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='password_confirmation'>Confirm Password</label>
                        <input type="password" id='password_confirmation' name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} required />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='company_name'>Company Name</label>
                        <input type="text" id='company_name' name="company_name" placeholder="Company Name" onChange={handleChange} required />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='company_description'>Description</label>
                        <input type="text" id='company_description' name="company_description" placeholder="Company Description" onChange={handleChange} />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='company_phone'>Phone</label>
                        <input type="text" id='company_phone' name="company_phone" placeholder="Phone" onChange={handleChange} />
                    </div>
                    <div className="bottom">
                        <h5>* required fields</h5>
                        <button type="submit" className='btn_dark'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
