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
                <form className='flex flex-col p-4 md:p-6 w-ful md:w-screenl m-auto max-w-md md:mr-auto md:ml-0'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-5'>Login</h1>
                    <Input type="text" name="username" placeholder="Username:" required />
                    <Input type="password" name="password" placeholder="Password:" required />
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                        <p className="text-sm text-[var(--label-gray)]">Don't have an account? <Link to="/auth/register" className="text-[var(--primary-color)] hover:underline">Create an account</Link></p>
                        <button type="submit" className='bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] transition-colors w-full sm:w-fit py-2 px-6 rounded text-white font-medium'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;