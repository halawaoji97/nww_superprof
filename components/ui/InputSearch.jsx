import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export const InputSearch = () => {
  return (
    <div class="relative w-[300px]">
      <div class="flex items-center relative">
        <div class="absolute pl-3 inset-y-0 left-0 w-10 h-full flex items-center text-gray-400">
          <HiMagnifyingGlass className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="search..."
          class="w-full pl-10 pr-3 px-3 py-2.5 leading-tight text-gray-secondary border appearance-none focus:outline-none focus:shadow-outline bg-white rounded-lg placeholder:text-gray-400"
        />
      </div>
    </div>
  )
}
