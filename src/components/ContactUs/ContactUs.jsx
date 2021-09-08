import { useHistory } from "react-router";
import './ContactUs.css';

export default function ContactUs() {

    const history = useHistory();

    return (
        <div className="ContactUs">
            <h1>Contact Us</h1>
            <p>Please reach out to give us feedback on how we're doing! If 
               there's anything you want to talk to us about, or you just 
               want to say hi, leave your name and email plus some detail
               regarding why you're contacting us and we'll email you back
               as soon as we can!</p>
            <p>While we wait for this feature to become fully operational,
               please feel free to reach out to us via our email:
               fflexecution@gmail.com</p>
            <button onClick={() => history.push('/')}>Go Home</button>
        </div>
    );
}