import "./Create.css";
import photo from "./../../../public/image/create.png";

const Create = () => {
    return (
    <div className="create">
        <div>
        <img src={photo} alt="Create Account" />
        <div className="hero">
        <h2>Join OptimizeHK</h2>
        <h3>Take your business<br/>
            To the next level</h3>
        </div>
        </div>
        <div className="hook">
            <p>Create an account</p>
            <form>
                <h5>Name</h5>
                <input type="text"/>
                <h5>Surname</h5>
                <input type="text"/>
                <h5>Email</h5>
                <input type="text"/>
                <h5>Password</h5>
                <input type="text"/>
            </form>
            <button>Create Account</button>
        </div>
    </div>
    )
}

export default Create