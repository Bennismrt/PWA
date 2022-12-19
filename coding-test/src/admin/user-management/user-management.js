import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import { FiArrowUpRight } from 'react-icons/fi';
import { GiProgression } from 'react-icons/gi';
import { TiDocumentText } from 'react-icons/ti';
import { RiHandCoinLine } from 'react-icons/ri';
import { MdOutlineArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import ChartSales from '../components/chart-sales';
import PieChart from '../components/pie-chart';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { SlHandbag, SlBasket } from 'react-icons/sl';
import { MdOutlineInventory2 } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate} from 'react-router-dom';

const UserManagement = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }
    const handleHome = () => {
        navigate('/home');
    }
    const handleSales = () => {
        navigate('/sales');
    }
    const handleInventory = () => {
        navigate('/inventory');
    }
    const handlePurchase = () => {
        navigate('/purchase');
    }
    const handleManagement = () => {
        navigate('/user-management');
    }



    return (
        <div className='w-full h-full px-6 overflow-hidden relative'>
            <nav className="fixed inset-x-0 bg-white p-2 w-full flex flex-row justify-between items-center border-b">
                <div className='flex flex-row items-center space-x-4'>
                    <div className='w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center'>
                        <img className='object-cover h-8 w-8 rounded-full' src='https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg' alt='profile'/>
                    </div>
                    <div className='font-[500]'>
                        <p className=' text-gray-700'>Roman Dimitri</p>
                        <p className='text-gray-700 text-xs mt-0'>owner</p>
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-4'>
                    <BsQuestionCircle className='text-xl mb-1' />
                    <AiOutlineMail className='text-2xl mb-1' />
                    <AiOutlineLogout className='mb-1 mr-4 text-xl' onClick={handleLogout}/>
                </div>
            </nav>
            <div className='w-full h-full overflow-y-auto mt-12 pb-64'>
                <div className='w-full flex flex-col'>
                    <h1 className='text-gray-700 font-bold text-lg mb-2 mt-5'>Team Management</h1>
                    <div className='w-full'>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Manager</p>
                                <img className='w-full h-32 object-cover p-4' src='https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-1554009/neils_neils-o-neck-polos-kaos-pria---putih_full02.jpg' alt='foto manager'/>
                                <div className='w-full text-center italic'>Arman H</div>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Supervisor</p>
                                <img className='w-full h-32 object-cover p-4' src='https://media.sgff.io/sgff_r1eHetbDYb/2022-10-12/1665610777549/The_state_of_women_1_320x286.png' alt='foto supervisor'/>
                                <div className='w-full text-center italic'>Yanti Kumala</div>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Lead Front Desk</p>
                                <img className='w-full h-32 object-cover p-4' src='https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000' alt='Lead Front Desk'/>
                                <div className='w-full text-center italic'>Budi Samba</div>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Front Desk</p>
                                <img className='w-full h-32 object-cover p-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW66liZ_taAPjDPliXquaA_MCM39lFkAiBemXuLLonI7PTs-S1qhRCuQOiPi402OEj-cU&usqp=CAU' alt='Front Desk'/>
                                <div className='w-full text-center italic'>Wanto Sala</div>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Office Boy</p>
                                <img className='w-full h-32 object-cover p-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrDbSf1ucCMdh_QMUIxfR8086_FbNENRHBQ&usqp=CAU' alt='Office Boy'/>
                                <div className='w-full text-center italic'>Garugu</div>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Receptionist</p>
                                <img className='w-full h-32 object-cover p-4' src='https://c8.alamy.com/comp/2BJK6N0/male-hotel-receptionist-at-workplace-2BJK6N0.jpg' alt='Receptionist'/>
                                <div className='w-full text-center italic'>Sarip</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed flex flex-row space-x-4 items-center justify-center inset-x-0 bottom-0 w-full h-16 px-4 bg-cyan-500'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <AiOutlineHome className='mb-1 mr-4 text-lg w-full m-auto text-white' onClick={handleHome}/>
                    <p className='text-xs text-white'>Homepage</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center' onClick={handleSales}>
                    <SlHandbag className='mb-1 mr-4 text-lg w-full m-auto text-white' />
                    <p className='text-xs text-white w-full text-center'>Sales</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center' onClick={handleInventory}>
                    <MdOutlineInventory2 className='mb-1 mr-4 text-lg w-full m-auto text-white' />
                    <p className='text-xs text-white w-full text-center'>Inventory</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center' onClick={handlePurchase}>
                    <SlBasket className='mb-1 mr-4 text-lg w-full m-auto text-white' />
                    <p className='text-xs text-white w-full text-center'>Purchase</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center border-b pb-2 cursor-pointer' onClick={handleManagement}>
                    <BiUserCircle className='mb-1 mr-4 text-lg w-full m-auto text-white'/>
                    <p className='text-xs text-white w-full text-center'>Management</p>
                </div>
                
            </div>
        </div>
    )
}

export default UserManagement;