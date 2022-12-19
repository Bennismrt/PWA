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

const home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
            <nav className="fixed inset-x-0 bg-white px-6 py-2  w-full flex flex-row justify-between items-center border-b">
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
                    <h1 className='text-gray-700 font-bold text-lg mb-2 mt-5'>Order Statistic</h1>
                    <div className='w-full'>
                        <div className='col-span-3 w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                            <div>
                                <p className='font-bold text-xs text-gray-700'>Total Selling</p>
                                <p className='font-bold text-2xl text-gray-700 mt-3'>890</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <IoIosArrowUp className='text-xl text-sky-500' />
                                <p className='font-bold text-sky-500'>20.5%</p>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                                <div>
                                    <p className='font-bold text-xs text-gray-700'>Expired Inventory</p>
                                    <p className='font-bold text-2xl text-gray-700 mt-3'>5</p>
                                </div>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                                <div>
                                    <p className='font-bold text-xs text-gray-700'>Out of stock Inventory</p>
                                    <p className='font-bold text-2xl text-gray-700 mt-3'>12</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full flex flex-col mt-10'>
                    <h1 className='font-bold text-gray-700 mb-2 text-lg'>Sales and Purchase</h1>
                    <div className='col-span-2 bg-white border-2 border-slate-200 gap-5 rounded-lg px-5 py-3'>
                            <div className='bg-black p-1 w-16 flex mx-auto rounded-md items-center'>
                                <FiArrowUpRight className='text-green-600 text-sm' />
                                <p className='text-white text-xs ml-1'>23.5%</p>
                            </div>
                            <div className='grid grid-cols-12 gap-3 mt-2'>
                                <ChartSales />
                            </div>
                            <div className='flex justify-between mt-10'>
                                <div className='flex justify-start'>
                                    <div className='text-center'>
                                        <p className='text-gray-700 text-sm font-semibold'>Target</p>

                                        <p className='text-green-400 text-xs font-semibold'> <MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />231</p>
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <div className='text-center'>
                                        <p className='text-gray-700 text-sm font-semibold'>Last Week</p>
                                        <p className='text-red-400 text-xs font-semibold'><MdArrowDropDown className='text-red-400 mx-auto text-lg inline' />232</p>
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <div className='text-center'>
                                        <p className='text-gray-700 text-sm font-semibold'>Last Month</p>
                                        <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />2314</p>
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <div className='text-center'>
                                        <p className='text-gray-700 text-sm font-semibold'>This Year</p>
                                        <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />8126</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-10'>
                    <h1 className='font-bold text-gray-700 mb-2 text-lg'>Sales and Purchase Summary</h1>
                    <div className='grid grid-rows-3 gap-2'>
                            <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                                <GiProgression className='text-5xl text-blue-500' />
                                <div className='text-right'>
                                    <p className='font-bold text-xs text-gray-700'>Total Transaksi</p>
                                    <p className='text-lg text-gray-700 font-bold'>Rp. 80.000.000</p>
                                </div>
                            </div>
                            <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                                <TiDocumentText className='text-5xl text-blue-500' />
                                <div className='text-right'>
                                    <p className='font-bold text-xs text-gray-700'>Sales</p>
                                    <p className='text-lg text-gray-700 font-bold'>289</p>
                                </div>
                            </div>
                            <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                                <RiHandCoinLine className='text-5xl text-blue-500' />
                                <div className='text-right'>
                                    <p className='font-bold text-xs text-gray-700'>Purchase</p>
                                    <p className='text-lg text-gray-700 font-bold'>289</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-10'>
                    <h1 className='font-bold text-gray-700 mb-2 text-lg'>Inventory</h1>
                    <div className='w-full bg-white border-2 border-slate-200 px-5 py-2 rounded-lg'>
                        <div className='px-2 w-full'>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>New Order</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>3</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Prepare Order</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>3</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Waiting Pickup</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>12</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Sent</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>9</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Cancel</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>7</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Done</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>5</div>
                            </div>
                        </div>
                    </div>   
                </div>

                <div className='w-full flex flex-col mt-10'>
                    <h1 className='font-bold text-gray-700 mb-2 text-lg'>Persentase Penjualan</h1>
                    <div className='w-full bg-white border-2 border-slate-200 px-5 py-2 rounded-lg'>
                    <div className='mb-5'>
                        <PieChart/>
                    </div>
                </div>
                </div>
                

            </div>
            <div className='fixed flex flex-row space-x-4 items-center justify-center inset-x-0 bottom-0 w-full h-16 px-4 bg-cyan-500'>
                <div className='w-full flex flex-col items-center justify-center border-b pb-2 cursor-pointer'>
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
                <div className='w-full flex flex-col items-center justify-center' onClick={handleManagement}>
                    <BiUserCircle className='mb-1 mr-4 text-lg w-full m-auto text-white'/>
                    <p className='text-xs text-white w-full text-center'>Management</p>
                </div>
                
            </div>
        </div>
    )
}

export default home;