import React from 'react';
import { CiCircleQuestion } from "react-icons/ci";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import { useNavigate} from 'react-router-dom';

const nextRegister = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/');
    }
    const handleBack = () => {
        navigate('/register');
    }

    return (
        <section className="h-screen overflow-hidden relative bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
            <div className="shadow-lg w-full py-2 px-10 flex justify-between items-center">
                <img src="./logo192.png" width={"20px"} alt="logo" />
                <p className="text-xs">
                    <CiCircleQuestion className="inline text-2xl mb-1" /> Pusat Bantuan
                </p>
            </div>
            <div className="w-full h-24 flex justify-around items-center">
                    <div className="flex flex-col w-full justify-center items-center">
                        <div className='mr-2 w-6 h-6 rounded-full bg-blue-500 flex justify-center items-center'>
                            <FaMapMarkerAlt className='text-xl text-white w-3 h-3' />
                        </div>
                        <p className='text-xs w-1/2 text-center text-slate-700 font-semibold'>
                            Pendaftaran Sarana
                        </p>    
                    </div>
                    <div className="w-full h-1 rounded bg-blue-500"></div>
                    <div className="flex flex-col w-full items-center">
                        <div className='mr-2 w-6 h-6 rounded-full bg-blue-500 flex justify-center items-center'>
                            <HiOutlineDocumentCheck className='text-xl text-white  w-3 h-3' />
                        </div>
                        <p className='text-xs text-slate-700 font-semibold'>Register</p>
                    </div>
            </div>
            <div className="w-full bg-white h-full rounded-lg shadow-md px-8 py-4 overflow-auto pb-64">
                <p className='font-semibold text-gray-700 mb-5'>
                    Register Akun Olin
                </p>
                <form className="w-full space-y-4">
                    <input
                        type={'email'}
                        className='input-control border w-full p-2 rounded-xl'
                        placeholder='Email *'
                    />
                    <input
                        type={'password'}
                        className='input-control border w-full p-2 rounded-xl'
                        placeholder='Kata Sandi *'
                    />
                    <input
                        type={'password'}
                        className='input-control border w-full p-2 rounded-xl'
                        placeholder='Konfirmasi Kata Sandi *'
                    />
                    <div className='flex items-start'>
                        <input type={'checkbox'} className='mr-2 mt-1 p-10' />
                        <p className='text-xs text-gray-700'>
                        Dengan membuat akun anda menyetujui{' '}
                        <span className='text-orange-400'>
                            Ketentuan penggunaan dan pemberitahuan Privasi
                        </span>{' '}
                        aplikasi OLIN
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <button className='border text-xs p-2 text-black rounded-md mt-2 w-full' onClick={handleBack}>
                            Kembali
                        </button>
                        <button className='bg-orange-400 text-xs p-2 text-white rounded-md mt-2 hover:bg-orange-500 w-full' onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default nextRegister