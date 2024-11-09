import SideBar from '@/components/admin/SideBar';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePic from "../../assets/author.png";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <ToastContainer theme='dark' />

                {/* Sidebar */}
                <SideBar className="w-full md:w-[220px]" />

                {/* Main content */}
                <div className="flex flex-col w-full">
                    {/* Top navigation */}
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-6 md:px-12 border-b-2">
                        <h3 className="font-medium text-sm md:text-lg lg:text-xl text-slate-500">
                            Admin Panel
                        </h3>
                        <Image src={ProfilePic} width={32} height={32} className="rounded-full ring-4 md:w-10 md:h-10" alt="profile" />
                    </div>

                    {/* Page content */}
                    <main className="p-4 md:p-8">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;
