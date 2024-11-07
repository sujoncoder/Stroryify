import SideBar from '@/components/admin/SideBar'
import Image from 'next/image'
import ProfilePic from "../../assets/author.png"

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex">
                <SideBar />

                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                        <h3 className="font-medium">
                            Admin Panel
                        </h3>
                        <Image src={ProfilePic} width={40} alt="profile" />
                    </div>

                </div>
            </div>

            {children}
        </>
    )
}

export default Layout