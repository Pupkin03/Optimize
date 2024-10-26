import "./Testimonial.css";
import photo from "./../../../public/image/testimonial.jpg";

const Testimonial = () => {
    return (
    <div className="testimonial">
        <h2>Testimonials</h2>
        <div className="test">
            <img src= {photo} alt="testimonial"/>
            <p>"I've been using OptimizeHK to find reliable African<br/>
                SMEs for my small business, and I've been so<br/>
                impressed!<br/>
                <br/>
                The directory is easy to navigate and features a wide<br/>
                range of businesses from different industries.<br/>
                <br/>
                I recently needed to find a graphic designer and was<br/>
                able to find several talented options right away.<br/>
                <br/>
                The profiles provided detailed information about each<br/>
                business, making it easy for me to compare and choose<br/>
                the best fit.<br/>
                <br/>
                I highly recommend OptimizeHK to anyone looking to<br/>
                connect with African SMEs."<br/>
                -Wanjiru Mugo
                Founder and Director,
                Mugo’s Crafts</p>
        </div>
                <button>List Your Business</button>
        </div>
    )
}

export default Testimonial