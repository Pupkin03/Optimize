import "./LogIn.css";
import photo from "./../../../public/image/create.png";

const logIn = () => {
  return (
    <div>
        <div className="create1">
        <div>
        <img src={photo} alt="Create Account" />
        <div className="hero1">
        <h2>Welcome Back <br/>
        to  OptimizeHK</h2>
        <h3>Take your business<br/>
            To the next level</h3>
        </div>
        </div>
        <div className="hook1">
            <p>Log in to your account</p>
            <form>
                <h5>Email</h5>
                <input type="text"/>
                <h5>Password</h5>
                <input type="text"/>
            </form>
            <button>Create Account</button>
        </div>
    </div>
    </div>
)
}

export default logIn