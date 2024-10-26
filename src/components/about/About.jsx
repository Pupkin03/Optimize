import "./About.css";
import map from "./../../../public/image/map.jpg"

const About = () => {
  return (
    <div className="about">
      <h2>About OptimizeHk</h2>
    <div className="double">
      <img src = {map} alt="map"/>
      <p>OptimizeHK is a vision to help optimize <br/>
        African businesses especially African SMEs.<br/>
        <br/>
        The strength of African Economies rely solely<br/>
        on Micro and Nano SMEs: The Mom and Pop<br/>
        shops we see littered across African streets.<br/>
        <br/>
        By helping this small scale businesses boost<br/>
        their productivity and facilitating their growth<br/>
        and expansion, we are helping to drive growth<br/>
        in African Economies.<br/>
        <br/>
        OptimizeHK helps this small scale<br/>
        entrepreneurs bridge the digital divide by<br/>
        organizing training, seminars workshops and<br/>
        empowerment programs.</p>
    </div>
    <button>List Your Business</button>
    </div>
  )
}

export default About