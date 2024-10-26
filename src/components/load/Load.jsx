import "./Load.css"
import fashion from "./../../../public/image/fashion.avif";
import food from "./../../../public/image/food.avif";
import phone from "./../../../public/image/phone.avif";
import photography from "./../../../public/image/photography.jpg";
import printing from "./../../../public/image/printing.avif";
import publishing from "./../../../public/image/publishing.avif";
import travel from "./../../../public/image/travel.jpg";
import property from "./../../../public/image/property.jpg";


const Load = () => {
  return (
    <div className="load">
        <h1>Popular Searches</h1>
        <div className="grid">
          <div className="line">
            <img src = {fashion}/>
            <p>Fashion</p>
          </div>
          <div className="line">
            <img src = {food}/>
            <p>Food</p>
          </div>
          <div className="line">
            <img src = {phone}/>
            <p>phone</p>
          </div>
          <div className="line">
            <img src = {photography}/>
            <p>Photography</p>
          </div>
          <div className="line">
            <img src = {printing}/>
            <p>Printing</p>
          </div>
          <div className="line">
            <img src = {publishing}/>
            <p>Publishing</p>
          </div>
          <div className="line">
            <img src = {travel}/>
            <p>Travel</p>
          </div>
          <div className="line">
            <img src = {property}/>
            <p>Property</p>
          </div>

        </div>
    </div>
  )
}

export default Load