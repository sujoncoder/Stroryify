"use client"

import Image from 'next/image'
import React from 'react'
import Logo from "../../assets/logo.png"
import Hero from '../home/Hero'

const Header = () => {
    return (
        <section className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt='logo'
                    className='cursor-pointer'
                />

                <button className='border-2 border-black px-4 py-2 shadow-[-7px_7px_0px_#000]'>Get started</button>
            </div>

            <Hero />
        </section>
    )
}

export default Header