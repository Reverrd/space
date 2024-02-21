import Nav from './nav/Nav'
import './homepage.scss'

export default function Home() {
  return (
    <div id="homepage">
      <div className="homepageWrapper w-screen h-screen">
        <Nav />
      </div>
    </div>
  )
}
