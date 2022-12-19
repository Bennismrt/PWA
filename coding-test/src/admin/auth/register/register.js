import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import { useNavigate} from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/next-register');
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
                    <div className="w-full h-1 rounded bg-gray-300"></div>
                    <div className="flex flex-col w-full items-center">
                        <div className='mr-2 w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center'>
                            <HiOutlineDocumentCheck className='text-xl text-white  w-3 h-3' />
                        </div>
                        <p className='text-xs text-slate-700 font-semibold'>Register</p>
                    </div>
            </div>
            <div className="w-full bg-white h-full rounded-lg shadow-md px-8 py-4 overflow-auto pb-64">
                    <p className="font-semibold text-gray-700 mb-5">
                    Input Data Perusahaan
                    </p>
                    <form className="w-full space-y-4">
                        <select className="input-control border w-full p-2 rounded-xl">
                            <option>Bidang Usaha *</option>
                        </select>
                        <input
                            type={"text"}
                            className="input-control p-2 border rounded-xl w-full"
                            placeholder="Nama perusahaan *"
                        />
                        <input
                            type={"text"}
                            className="input-control p-2 border rounded-xl w-full"
                            placeholder="NPWP Perusahaan *"
                        />
                        <input
                            type={"text"}
                            className="input-control p-2 border rounded-xl w-full"
                            placeholder="Alamat Sesuai NPWP *"
                        />
                        <select className="input-control p-2 border rounded-xl w-full">
                            <option>Provinsi *</option>
                        </select>
                        <select className="input-control p-2 border rounded-xl w-full">
                            <option>Kota/Kabupaten *</option>
                        </select>
                        <select className="input-control p-2 border rounded-xl w-full">
                            <option>Kecamatan *</option>
                        </select>
                        <input
                            type={"text"}
                            className="input-control p-2 border rounded-xl w-full"
                            placeholder="Kode Pos *"
                        />
                    <p className="text-xs font-bold">Upload Kelengkapan Data</p>
                    <span className="bg-sky-600 text-xs text-white font-semibold w-full block py-1 px-2 rounded-t-md">
                        <HiOutlineDocumentText className="mb-1 inline text-base" /> NIB
                    </span>
                    <label>
                        <div className="flex flex-col justify-center items-center pt-2 pb-5 rounded-b-md cursor-pointer hover:shadow-md">
                        <FaCloudUploadAlt className="text-2xl" />
                        <p className="text-xs font-semibold">Upload NIB Valid</p>
                        </div>
                        <input type={"file"} className="hidden" />
                    </label>
                    </form>
                    <button
                    className="bg-orange-400 text-xs p-2 text-white rounded-md w-full mt-2 hover:bg-orange-500"
                    onClick={handleSubmit}
                    >
                    Selanjutnya
                    </button>
            </div>
        </section>
    );
}
