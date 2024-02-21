import './nav.scss'

export default function Nav() {
  return (
    <div className="Nav pt-7">
        <div id="navWrapper" className="flex justify-between h-auto items-center relative">
            <div className="Logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>
            <div className="rightNav text-white px-14 h-16 flex items-center">
                <span className="mx-10"> 00 Home</span>
                <span className="mx-10">01 Destination</span>
                <span className="mx-10">02 Crew</span>
                <span className="mx-10 pr-10">03 Technology</span>
            </div>
            {/* <hr className='absolute w-1/3 left-0'/> */}
        </div>
      
    </div>
  )
}
