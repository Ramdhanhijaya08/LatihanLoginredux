import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import HomePage from './Home';

const LoginPage = () => {

const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();
const user = useSelector(state => state.login.user);

const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
        email:email,
        password:password,
        loggedIn: true,
    }));
};

    return (
        <div className='flex justify-center my-10' >
            <div className='w-1/3 shadow p-3 rounded-lg border-gray-600'>
                <h1 className='text-2x1 my-7 justify-center font-extrabold rounded-lg transiton bg-red-500 py-3 px-4 text-white '>Login </h1>

                <from  onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label>Email</label>
                    <div>
                    <input
                    type='email'
                    placeholder='Email'
                    className='border rounded-lg border-gray-600 p-1 w-full'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    </div>
                </div>
                <div>
                        <label>Password</label>
                    <div>
                    <input
                    type='password'
                    placeholder='Password'
                    className='border rounded-lg border-gray-600 p-1 w-full'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    </div>
                </div>
                <div className='my-3 '>
                    <button  
                    onClick={() => dispatch(login(user))}
                    type='submit' className='rounded-lg bg-green-700 text-white px-3 py-1'>Login</button>
                </div>
                </from>
            </div>
        </div>
    )
}

export default LoginPage;
