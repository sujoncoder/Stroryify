"use client"

import Image from 'next/image'
import React from 'react'
import Logo from "../../assets/logo.png"
import Link from 'next/link'

const Header = () => {
    return (
        <section className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href="/">
                    <Image
                        src={Logo}
                        width={50}
                        height={50}
                        alt='logo'
                        className='cursor-pointer'
                    />
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/about" className="text-xl font-semibold ">About us</Link>
                    <Link href="/admin" className="text-xl font-semibold ">Admin</Link>
                </div>

                <button className='border-2 border-black px-4 py-2 shadow-[-7px_7px_0px_#000]'>Get started</button>
            </div>

        </section>
    )
}

export default Header