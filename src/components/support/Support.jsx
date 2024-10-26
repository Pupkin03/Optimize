import "./Support.css";
import sm from "./../../../public/image/smeda.jpg";
import ba from "./../../../public/image/bank.png";
import fe from "./../../../public/image/federal.jpg";
import mc from "./../../../public/image/mac.png";

const Support = () => {
  return (
    <div className="support">
        <h2>Supported By:</h2>
        <div className="space">
            <img className="photo1" src={sm}/>
            <img className="photo2" src={ba}/>
            <img className="photo3" src={fe}/>
            <img className="photo4" src={mc}/>
        </div>
    </div>
  )
}

export default Support