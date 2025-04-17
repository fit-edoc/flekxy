// components/Login.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser ,} from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') navigate('/');
    });
    dispatch(loginSuccess(response.data.user)); // Send user data to Redux

  };

  return (
    <div className='bg-gradient-to-r from-green-200 to-slate-900 h-[100vh] relative'>
      
        <form onSubmit={handleSubmit} className="login_form absolute flex flex-col justify-between items-center gap-3 bg-[#ffffff75] rounded-lg backdrop-blur-2xl py-3 h-[50vh] w-[90vw] md:w-[40vw]  px-5">
        <h1 className='text-center capitalize font-front text-white text-2xl  py-1 px-2 bg-gradient-to-r from-green-200 to-slate-900  rounded-full md:py-3'>welcome to Flekxy</h1>
      <div className='flex flex-col items-center justify-center gap-3 py-3'><input name="email" placeholder="Email" className='h-[40px] px-2 w-[250px]  p-2 bg-gray-200 text-black border-green-200 rounded-lg md:w-[300px]' onChange={handleChange} />
      <input name="password" type="password" className='h-[40px] px-2 w-[250px] rounded-lg bg-gray-200 text-black md:w-[300px]' placeholder="Password" onChange={handleChange} />
      <button type="submit" className='px-4 py-2 bg-green-400' disabled={loading}>Login</button>
     <Link to={'/register'}> <p className='underline'>not have an account</p></Link>
      {error && <p>{error.message}</p>}</div>
    </form>
    </div>
  );
};
