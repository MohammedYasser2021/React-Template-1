import Home from './../home/index'
import About from './../about/index'
import Portfolio from './../portfolio/index'
import Profile from './../profile/index'
import Social from './../Socialmedia/index'
import Works from './../works/index'
import Footer from './../footer/index'
function Index() {
  return (
    <div>
      <Home />
      <Works />
      <Portfolio />
      <Profile />
      <About />
      <Social />
      <Footer />
    </div>
  )
}

export default Index
