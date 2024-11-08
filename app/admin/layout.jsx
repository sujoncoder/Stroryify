import SideBar from '@/components/admin/SideBar'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProfilePic from "../../assets/author.png"


const Layout = ({ children }) => {
    return (
        <>
            <div className="flex">
                <ToastContainer theme='dark' />
                <SideBar />

                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                        <h3 className="font-medium">
                            Admin Panel
                        </h3>
                        <Image src={ProfilePic} width={40} alt="profile" />
                    </div>
                    {children}
                </div>
            </div>


        </>
    )
}

export default Layout