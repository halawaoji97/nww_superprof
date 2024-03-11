import React from 'react'
import Image from 'next/image'
import EnFlag from '@/assets/icons/en_flag.svg'
import { HiBellAlert, HiEnvelope } from 'react-icons/hi2'
import { InputSearch } from '../ui/InputSearch'

const imageStyle = {
  borderRadius: '50%',
}

const Topbar = () => {
  return (
    <header className="h-[76px] border fixed right-0 top-0 left-0 ml-[257px] z-[9999] bg-white">
      <div className="flex justify-between items-center h-full px-8">
        <InputSearch />
        <ul className="flex items-center space-x-4">
          <li>
            <button type="button">
              <Image src={EnFlag} alt="English" height={31} width={31} />
            </button>
          </li>
          <li>
            <button type="button">
              <HiBellAlert className="w-8 h-8 text-[#8A92A6]" />
            </button>
          </li>
          <li>
            <button type="button">
              <HiEnvelope className="w-8 h-8 text-[#8A92A6]" />
            </button>
          </li>
          <li>
            <button type="button" className="flex items-center">
              <Image
                src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt="User"
                height={45}
                width={45}
                style={imageStyle}
              />
              <div className="flex justify-start flex-col items-start ml-4">
                <p className="indigo-primary">Austin Robertson</p>
                <span className="text-gray-primary-2 text-sm">Marketing Administrator</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Topbar
