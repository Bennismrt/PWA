import React from 'react';
import { Link } from 'react-router-dom';
import { CiCircleQuestion } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import backgroundDoctor from '../../../assets/doctor.png';
import { useNavigate} from 'react-router-dom';


const login = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/home');
    }

    return (
        <div className='w-full h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500'>
            <div className='bg-colorOne w-full relative'>
                    <div className='flex justify-between px-6 py-10'>
                        <img src="./logo192.png" width={"30px"} alt="logo" />
                        <p className='text-xs'><CiCircleQuestion className='inline text-2xl mb-1' /> Pusat Bantuan</p>
                    </div>
                    <div className='px-6 py-10 mb-10 absolute top-50 z-30 w-full'>
                        <h1 className='text-4xl text-center w-full font-semibold'>Selamat Datang</h1>
                        <h1 className='text-xl text-center w-full'>di Solusi Perangkat Lunak Farmasi</h1>
                        <p className='text-md text-center'>Sistem Manajemen Apotek Online</p>
                    </div>
                </div>
                <div className='absolute top-40 w-full h-56 z-20 opacity-10 right-0'>
                        <img src={backgroundDoctor} width={"500px"} alt="" />
                        <hr className='text-slate-800' />
                </div>
                <div className='bg-colorTwo w-full text-center w-full absolute z-40 top-80'>
                    <h1 className='font-semibold mb-10 px-8 text-left'>Silahkan masuk kedalam akun anda dan kelola apotek anda</h1>
                    <div className='w-80 mx-auto'>
                        <form>
                            <label className='relative'>
                                <p className='text-sm font-semibold text-left text-gray-700'>EMAIL</p>
                                <input type={"text"} className="py-2 w-full rounded-md px-8 border" placeholder='name@email.com' />
                                <span className='absolute -left-[9.5rem] bottom-0'><AiOutlineMail className='inline text-gray-400' /></span>
                            </label>
                            <label className='relative'>
                                <p className='text-sm font-semibold text-left mt-2 text-gray-700'>PASSWORD</p>
                                <input type={"password"} className="py-2 w-full rounded-md px-8 border" placeholder='***********' />
                                <span className='absolute -left-[19.4rem] bottom-0'><RiLockPasswordLine className='inline text-gray-400' /></span>
                            </label>
                            <div className='flex justify-between mt-2'>
                                <div className='flex'>
                                    <input type={"checkbox"} className="mr-1" />
                                    <p className='text-xs text-gray-700'>Inget Saya</p>
                                </div>
                                <p className='text-red-700 text-xs cursor-pointer'><Link to="/forgot-password">Lupa Password ?</Link></p>
                            </div>
                            <button className='mt-2 py-1 bg-sky-600 w-full rounded-md text-gray-200 text-[500] hover:bg-sky-700' onClick={handleLogin}>Masuk</button>
                            <p className='mt-5'>Belum Registrasi ? Silahkan klik <Link to="/register"> <span className='text-red-700 hover:text-red-800 cursor-pointer'>Daftar</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default login