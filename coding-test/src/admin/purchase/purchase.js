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

const Purchase = () => {
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
                    <h1 className='text-gray-700 font-bold text-lg mb-2 mt-5'>Inventory</h1>
                    <div className='w-full'>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Pulpen</p>
                                <img className='w-full h-32 object-cover p-4' src='https://cf.shopee.co.id/file/9d83ccfce6321d39cde5c7bd408adcf8' alt='pulpen'/>
                                <div className='w-full flex flex-row space-x-2 items-center'>
                                    <div className='font-semibold'>Total :</div>
                                    <div className='font-semibold'>3</div>
                                </div>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Panadol</p>
                                <img className='w-full h-32 object-cover p-4' src='https://images.tokopedia.net/img/cache/700/product-1/2020/7/1/5372526/5372526_424be0d8-ece4-43db-83f5-62b0fd2036dd_1080_1080.jpg' alt='panadol'/>
                                <div className='w-full flex flex-row space-x-2 items-center'>
                                    <div className='font-semibold'>Total :</div>
                                    <div className='font-semibold'>20</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Totebag</p>
                                <img className='w-full h-32 object-cover p-4' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/442432/item/goods_30_442432.jpg?width=1600&impolicy=quality_75' alt='totebag'/>
                                <div className='w-full flex flex-row space-x-2 items-center'>
                                    <div className='font-semibold'>Total :</div>
                                    <div className='font-semibold'>31</div>
                                </div>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Handsanitizer</p>
                                <img className='w-full h-32 object-cover p-4' src='https://res.cloudinary.com/ruparupa-com/image/upload//f_auto,q_auto:eco/v1589191917/Products/10412933_1.jpg' alt='handsanitizer'/>
                                <div className='w-full flex flex-row space-x-2 items-center'>
                                    <div className='font-semibold'>Total :</div>
                                    <div className='font-semibold'>11</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Meja Kasir</p>
                                <img className='w-full h-32 object-cover p-4' src='https://media.4rgos.it/i/Argos/8201100_R_Z001A?w=750&h=440&qlt=70' alt='Meja kasir'/>
                                <div className='w-full flex flex-row space-x-2 items-center'>
                                    <div className='font-semibold'>Total :</div>
                                    <div className='font-semibold'>2</div>
                                </div>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Televisi</p>
                                <img className='w-full h-32 object-cover p-4' src='https://inisumedang.com/wp-content/uploads/2022/04/IMG-20220428-WA0010.jpg' alt='televisi'/>
                                <div className='w-full flex flex-row space-x-2 items-center'>
                                    <div className='font-semibold'>Total :</div>
                                    <div className='font-semibold'>5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-lg border mt-5 p-4 flex flex-col'>
                    <div className='w-full flex flex-row justify-between'>
                        <div>Total</div>
                        <div>Rp 1.000.000</div>
                    </div>
                    <div className='w-full flex flex-row justify-between'>
                        <div>Diskon</div>
                        <div>Rp 200.000</div>
                    </div>
                    <div className='w-full flex flex-row justify-between'>
                        <div className='font-semibold'>Grand Total</div>
                        <div>Rp 800.000</div>
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
                <div className='w-full flex flex-col items-center justify-center border-b pb-2 cursor-pointer' onClick={handlePurchase}>
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

export default Purchase;