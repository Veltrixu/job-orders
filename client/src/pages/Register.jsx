import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../api/axios.js';
import Input from '../component/Input.jsx';

import BG from '../assets/bg.png';
import Logo from '../component/Logo.jsx';

function Register() {
    // Defining state for each input field
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Confirm password match
        if (formData.password !== formData.confirm_password) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const res = await axiosInstance.post('/register', formData);
            navigate('/')
        } catch (error) {
            console.error("Error during registration:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className='w-full h-screen min-h-screen'>
            <div
                className='grid md:grid-cols-2 gap-5 grid-cols-1 items-center justify-center min-h-screen p-4 md:p-12 lg:p-20 bg-cover'
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                }}
            >
                <div className="flex justify-center md:justify-start">
                    <Logo/>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col p-4 md:p-6 w-full m-auto max-w-md md:mr-auto md:ml-0'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-5'>Register</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Input
                                type="text"
                                name="firstname"
                                placeholder="First Name:"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="lastname"
                                placeholder="Last Name:"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username:"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email:"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password:"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password:"
                        value={formData.confirm_password}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/auth/login" className="text-blue-500 hover:underline">
                                Log in
                            </Link>
                        </p>
                        <button
                            type="submit"
                            className='bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-fit py-2 px-6 rounded text-white font-medium'>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
