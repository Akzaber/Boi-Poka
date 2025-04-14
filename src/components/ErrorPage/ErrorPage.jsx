import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen space-y-12'>
            <h1 className="text-7xl font-bold ">Page Not Found 404</h1>
            <button onClick={() => navigate('/')} className="btn btn-ghost btn-xl">Go Home</button>
        </div>
    );
};

export default ErrorPage;