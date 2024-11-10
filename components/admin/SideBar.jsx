"use client"

import Image from 'next/image';
import Logo from "../../assets/logo.png";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname();  // Get the current path

    return (
        <div className="flex flex-col bg-slate-100">
            {/* Logo Section */}
            <div className="flex justify-center py-4">
                <Link href="/">
                    <Image src={Logo} width={70} alt="Logo" />
                </Link>
            </div>

            {/* Sidebar Navigation Links */}
            <div className="w-28 sm:w-64 h-[100vh] relative py-12">
                <div className="mx-4 flex sm:flex-col">

                    {/* Add Blog Button */}
                    <Link href="/admin/addProduct">
                        <div
                            className={`flex items-center gap-4 px-4 py-2 font-medium rounded text-white duration-300 ${pathname === '/admin/addProduct' ? 'bg-blue-600' : 'bg-blue-400'
                                }`}
                        >
                            <IoMdAdd size={30} />
                            <span className="text-lg">Add blog</span>
                        </div>
                    </Link>

                    {/* Blog List Button */}
                    <Link href="/admin/blogList">
                        <div
                            className={`my-4 flex items-center gap-4 px-4 py-2 font-medium rounded text-white duration-300 ${pathname === '/admin/blogList' ? 'bg-blue-600' : 'bg-blue-400'
                                }`}
                        >
                            <FaRegEdit size={30} />
                            <span className="text-lg">Blog lists</span>
                        </div>
                    </Link>

                    {/* Subscriptions Button */}
                    <Link href="/admin/subscriptions">
                        <div
                            className={`flex items-center gap-4 px-4 py-2 font-medium rounded text-white duration-300 ${pathname === '/admin/subscriptions' ? 'bg-blue-600' : 'bg-blue-400'
                                }`}
                        >
                            <MdMarkEmailRead size={30} />
                            <span className="text-lg">Subscriptions</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
