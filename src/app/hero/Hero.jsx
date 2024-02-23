import './hero.scss'

export default function Hero() {
  return (
    <div className="hero">
        <div className="heroWrapper flex items-center justify-around  mt-52 md:mt-32 md:flex-col">
            <div className="left w-3/12 p-4 md:w-8/12 ">
                <p className='tracking-wider md:text-center md:text-2xl text-slate-300'>SO, YOU WANT TO TRAVEL TO</p>
                <h1 className='space text-8xl py-7 md:text-center md:text-9xl'>SPACE</h1>
                <p id='special' className='text-sm md:text-xl md:text-center text-slate-300'>Let's face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we'll give you a truly out of this world experience!</p>
            </div>
            <div className="md:mt-40 ">
            <div className="right text-black  flex justify-center items-center bg-white h-60 w-60 rounded-circle">
                <div className='md:text-3xl'>EXPLORE</div>
                
            </div>
            </div>
        </div>
      
    </div>
  )
}
