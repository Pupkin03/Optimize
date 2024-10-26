import "./Question.css";
import search from "./../../../public/image/faq.jpg"
const Question = () => {
    return(
        <div className="question">
            <h2>FAQs</h2>
            <div className="dobble">
            <img src ={search} alt="search"/>
            <p>Q. Can I list my business on this directory free of charge?<br/>
            <br/>
                A. Yes! You can list your business for free.<br/>
            <br/>
                Q. How do I list my business?<br/>
            <br/>
            A. Create an account. Go through the verification flow of<br/>
            your business to get your business verified.<br/>
            <br/>
            Q. How much is verification?<br/>
            <br/>
            A. Verification is free of charge.<br/>
            <br/>
            Q. How long does it take to get my business verified?<br/>
            <br/>
            A. Based on the quality of the documents you supplied,<br/>
            verification can take between<br/>
            24 hours and 5 working days.</p>
            </div>
            <button>List Your Business</button>
        </div>
    )

};

export default Question;
