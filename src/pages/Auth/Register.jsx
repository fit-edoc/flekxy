// components/Register.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', address: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(form)).unwrap();
      setForm({ name: '', email: '', password: '', address: '' });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
   <div className='bg-gradient-to-r from-green-200 to-slate-900 h-[100vh]'>
    <div className='h-[calc(100vh-70px)] w-full absolute mt-[70px]'>
    <form onSubmit={handleSubmit} className="register-form absolute flex flex-col justify-between items-center gap-3 bg-[#ffffff75] rounded-lg backdrop-blur-2xl py-3 h-[60vh] w-[90vw] md:w-[40vw]  px-5 ">
    <h1 className='text-center capitalize font-front text-white text-2xl py-1 px-2 bg-gradient-to-r from-green-200 to-slate-900  rounded-full md:py-4'>welcome to Flekxy</h1>
      <input type="text"
      className='h-[40px] px-2 w-[250px] rounded-lg bg-gray-200 text-black md:w-[300px]'
             placeholder="Username"
             name="username"
             value={form.username}
             onChange={handleChange} />
      <input name="name"
      className='h-[40px] px-2 w-[250px] rounded-lg bg-gray-200 text-black md:w-[300px]'
             placeholder="Name"
             value={form.name}
             onChange={handleChange} />
      <input name="email"
      className='h-[40px] px-2 w-[250px] rounded-lg bg-gray-200 text-black md:w-[300px]'
             type="email"
             placeholder="Email"
             value={form.email}
             onChange={handleChange} />
      <input name="address"
      className='h-[40px] px-2 w-[250px] rounded-lg bg-gray-200 text-black md:w-[300px]'
             placeholder="Address"
             value={form.address}
             onChange={handleChange} />
      <input name="password"
             type="password"
             className='h-[40px] px-2 w-[250px] rounded-lg bg-gray-200 text-black md:w-[300px]'
             placeholder="Password"
             value={form.password}
             onChange={handleChange} />
      <button type="submit" disabled={loading} className='px-4 py-2 bg-green-400 rounded-sm'>Register</button> <br />
      <Link to={'/login'}> <p className='underline'>already have account</p></Link>
      {error && <p>{error.message}</p>}
    </form>
    </div>
   </div>
  );
};
