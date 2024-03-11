'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiPlus, HiChevronUp, HiChevronLeft, HiChevronRight, HiEnvelope } from 'react-icons/hi2'
import { navSidebar } from '@/constants/navigation'

const Sidebar = () => {
  return (
    <aside className="border w-[257px] top-0 h-screen fixed overflow-auto bg-white">
      <div>
        <div className="flex justify-center items-center border-b h-[75px]">
          <Link href={'/'}>
            <Image src={'/logo.svg'} alt="NWW" width={145} height={72} />
          </Link>
        </div>
        <div className="pl-8 pr-5  mt-8">
          <Link href="/dashboard" className="bg-sky-light rounded-full text-sm py-3 px-7 flex justify-center items-center w-full">
            <HiPlus className="w-5 h-5 mr-2" /> New Booking
          </Link>
        </div>
        <div className="pl-8 pr-5">
          <p className="mt-5 text-sm flex w-full rounded-xl bg-white px-4 py-3 text-left">Home</p>
          <ul className="mt-1">
            {navSidebar.map((nav, index) => {
              return (
                <li key={index} className="flex w-full rounded-xl bg-white px-4 py-3 text-left text-sm  hover:bg-gray-primary focus:outline-none mb-1">
                  <HiChevronRight className={` h-5 w-5 text-gray-400`} />
                  <Link href={nav.href} className="ml-2 flex w-full items-center">
                    <nav.icon className="h-5 w-5 mr-3" /> {nav.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
