import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="h-[76px] border    ml-[257px] bg-white">
      <div className="flex justify-between text-xs items-center h-full px-8">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href={'/'}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={'/'}>Terms of Use</Link>
          </li>
        </ul>
        <p>
          © 2021 Hope UI, Made with ❤ by <span className="text-blue-500">IQONIC Design.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
