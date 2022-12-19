import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { SlHandbag, SlBasket } from 'react-icons/sl';
import { MdOutlineInventory2 } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate} from 'react-router-dom';

const Inventory = () => {
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
                                <p className='font-bold text-xs text-gray-700'>Komputer</p>
                                <img className='w-full h-32 object-cover p-4' src='https://www.utopicomputers.com/wp-content/uploads/2017/02/Gambar-Komputer.jpg' alt='komputer'/>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Macbook</p>
                                <img className='w-full h-32 object-cover p-4' src='https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_m2_2022_space_grey_1.jpg' alt='komputer'/>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Jarum Suntik</p>
                                <img className='w-full h-32 object-cover p-4' src='https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/11/31a46979-cd7f-4035-8212-9f4edbdf35b9.jpg' alt='komputer'/>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Stetoskop</p>
                                <img className='w-full h-32 object-cover p-4' src='https://siplahtelkom.com/public/products/146004/3010672/h5ecd40db4ae346.1635427466.jpg' alt='komputer'/>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4 space-x-4'>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Mikroskop</p>
                                <img className='w-full h-32 object-cover p-4' src='https://www.seluncur.id/wp-content/uploads/2020/01/macam-macam-mikroskop-cahaya.jpg' alt='komputer'/>
                            </div>
                            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex flex-col justify-between'>
                                <p className='font-bold text-xs text-gray-700'>Telepon Rumah</p>
                                <img className='w-full h-32 object-cover p-4' src='https://blogpictures.99.co/800.800_23b2d00036a846f5b442873281f93cee.jpg' alt='komputer'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-10'>
                    <h1 className='font-bold text-gray-700 mb-2 text-lg'>Overview</h1>
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
                <div className='w-full flex flex-col items-center justify-center border-b pb-2 cursor-pointer' onClick={handleInventory}>
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

export default Inventory;