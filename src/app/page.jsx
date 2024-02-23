import Nav from './nav/Nav'
import './homepage.scss'
import Hero from './hero/Hero'

export default function Home() {
  return (
    <div id="homepage">
      <div className="homepageWrapper w-screen h-screen text-white">
        <Nav />
        <Hero />
      </div>
      
    </div>
  )
}
