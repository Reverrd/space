import Link from 'next/link'
import './nav.scss'

export default function Nav() {
  return (
    <div className="Nav pt-7 md:pt-0">
        <div id="navWrapper" className="flex justify-between h-auto items-center relative">
            <div className="Logo ml-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>
            <div className="rightNav text-white flex px-14 md:px-10 h-20 md:h-24 items-center">
                <Link href='/' className="mx-10 md:mx-5 "> 00 Home</Link>
                <Link href='/destination' className="mx-10 md:mx-5">01 Destination</Link>
                <Link href='/crew' className="mx-10 md:mx-5">02 Crew</Link>
                <Link href='/technology' className="mx-10 md:mx-5 pr-10 md:pr-0">03 Technology</Link>
            </div>
            {/* <hr className='absolute w-1/3 left-0'/> */}
        </div>
      
    </div>
  )
}
