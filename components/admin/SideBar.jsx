
import Image from 'next/image'
import Logo from "../../assets/logo.png"
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Link from 'next/link';


const SideBar = () => {
    return (
        <div className="flex flex-col bg-slate-100">
            <div className="px-2 sm:pl-14 py-3 border border-black">
                <Image src={Logo} width={120} alt="Logo" />
            </div>

            <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
                <div className="w-[50%] sm:w[80%] absolute right-0">
                    <Link href="/admin/addProduct" className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5x_0px_#000000]">
                        <IoMdAdd />
                        <span>Add blog</span>
                    </Link>

                    <Link href="/admin/blogList" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5x_0px_#000000]">
                        <FaRegEdit />
                        <span>Blog lists</span>
                    </Link>

                    <Link href="/admin/subscriptions" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5x_0px_#000000]">
                        <MdMarkEmailRead />
                        <span>Subscriptions</span>
                    </Link>
                </div>


            </div>
        </div>
    )
}
export default SideBar
