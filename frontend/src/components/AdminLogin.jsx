import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import getBaseUrl from '../utils/baseUrl';

const AdminLogin = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const auth = response.data;
            if(auth.token){
                localStorage.setItem("token", auth.token);
                setTimeout(() => {
                    localStorage.removeItem("token");
                    alert('Token expired, please login again');
                    navigate("/");
                }, 3600 * 1000);

                alert("Login successful");
                navigate("/dashboard", { replace: true });
            }
        } catch (error) {
            setMessage("Please provide a valid username and password");
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className='h-screen flex items-center justify-center'>
    <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className='text-xl font-semibold mb-4'>Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    {...register("username", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    {...register("password", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
            </div>
            {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
            <div className='w-full'>
                <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold 
                py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
            </div>
        </form>

        <p className='mt-5 text-center text-gray-500 text-xs'>2025 All rights reserved</p>
    </div>
</div>
  )
}

export default AdminLogin