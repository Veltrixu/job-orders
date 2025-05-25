import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Input from '../../component/Input.jsx';

import BG from '../../assets/bg.png';
import Logo from '../../component/Logo.jsx';

function Register() {
    return (
        <div className='w-full h-screen min-h-screen'>
            <div
                className='grid md:grid-cols-2 gap-10 grid-cols-1 items-center justify-center min-h-screen p-4 md:p-12 lg:p-20 bg-cover'
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                }}
            >
                <div className="flex justify-center items-center md:justify-start">
                    <Logo />
                </div>
                <form className='lex flex-col p-4 md:p-6 w-full md:w-screen m-auto max-w-md md:mr-auto md:ml-0'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-5'>Register</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Input
                                type="text"
                                name="firstname"
                                placeholder="First Name:"
                                required
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="lastname"
                                placeholder="Last Name:"
                                required
                            />
                        </div>
                    </div>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username:"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email:"
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password:"
                        required
                    />
                    <Input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password:"
                        required
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/auth/login" className="text-[var(--primary-color)] hover:underline">
                                Log in
                            </Link>
                        </p>
                        <button
                            type="submit"
                            className='bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] transition-colors w-full sm:w-fit py-2 px-6 rounded text-white font-medium'>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;