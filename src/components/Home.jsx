import About from "./about/About"
import Load from "./load/Load"
import Question from "./question/Question"
import Search from "./search/Search"
import Support from "./support/Support"
import Testimonial from "./testimonial/Testimonial"


const Home = () => {
  return (
    <div>
        <Search/>
        <Load/>
        <About/>
        <Question/>
        <Testimonial/>
        <Support/>
    </div>
  )
}

export default Home