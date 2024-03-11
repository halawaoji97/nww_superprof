import { Container } from '@/components/shared/Container'
import React from 'react'
import { HiMiniInformationCircle } from 'react-icons/hi2'
import { FaFacebookMessenger, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const page = () => {
  return (
    <Container>
      <div className="bg-[#F9F9F9] rounded-2xl px-11 py-12">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Profile Details</h2>
          <button type="button">Edit</button>
        </div>
        <form className="text-sm mt-5 grid grid-cols-2 gap-x-[90px] gap-y-11">
          <div className="flex flex-col justify-start items-start bg-white rounded-xl py-3 px-9">
            <label className="text-xs text-gray-400 mb-2">Contact Name</label>
            <p>Frank Delaware</p>
          </div>
          <div className="flex flex-col justify-start items-start bg-white rounded-xl py-3 px-9">
            <label className="text-xs text-gray-400 mb-2">Business Name</label>
            <p>Frank Moves</p>
          </div>
          <div className="flex flex-col justify-start items-start bg-white rounded-xl py-3 px-9">
            <label className="text-xs text-gray-400 mb-2">Contact Number</label>
            <p>+61 444 444 444</p>
          </div>
          <div className="flex flex-col justify-start items-start bg-white rounded-xl py-3 px-9">
            <label className="text-xs text-gray-400 mb-2">Email</label>
            <p>team@nwwdigital.com</p>
          </div>
          <div className="flex flex-col justify-start items-start bg-white rounded-xl py-3 px-9">
            <label className="text-xs text-gray-400 mb-2">Country</label>
            <p>Australia</p>
          </div>
          <div className="flex flex-col justify-start items-start bg-white rounded-xl py-3 px-9">
            <label className="text-xs text-gray-400 mb-2">Language</label>
            <p>English (UK)</p>
          </div>
        </form>
      </div>

      <div className="bg-[#F9F9F9] rounded-2xl px-11 py-12 mt-10">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Connected Accounts</h2>
          <button type="button">Edit</button>
        </div>
        <div className="flex items-start bg-[#EEF3FA] rounded-xl px-6 py-2 mt-5">
          <HiMiniInformationCircle className="mr-2 h-5 w-5" />
          <p className="text-[#837C7C] text-sm">
            Connected Accounts is activated for comprehensive Live Agent Capabilities and streamlined Omni-channel Messaging. For access, promptly contact the dedicated NWW Team
          </p>
        </div>
        <div className="text-sm mt-12 grid grid-cols-2 gap-x-[90px] gap-y-11 ">
          <div className="flex items-center py-3 px-9">
            <FaWhatsapp className="w-10 h-10 mr-5" />
            <div className="flex flex-col text-sm pr-10">
              <p className=" font-semibold mb-1">WhatsApp</p>
              <span className="text-[#9FA1A2]">Instant messaging with voice and video sharing. Log in with...</span>
            </div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          
          <div className="flex items-center py-3 px-9">
            <FaInstagram className="w-10 h-10 mr-5" />
            <div className="flex flex-col text-sm pr-10">
              <p className=" font-semibold mb-1">Instagram</p>
              <span className="text-[#9FA1A2]">Instant messaging with voice and video sharing. Log in with...</span>
            </div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="flex items-center py-3 px-9">
            <FaTiktok className="w-10 h-10 mr-5" />
            <div className="flex flex-col text-sm pr-10">
              <p className=" font-semibold mb-1">TikTok</p>
              <span className="text-[#9FA1A2]">Instant messaging with voice and video sharing. Log in with...</span>
            </div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="flex items-center py-3 px-9">
            <FaFacebookMessenger className="w-10 h-10 mr-5" />
            <div className="flex flex-col text-sm pr-10">
              <p className=" font-semibold mb-1">Facebook Messenger</p>
              <span className="text-[#9FA1A2]">Instant messaging with voice and video sharing. Log in with...</span>
            </div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default page
