import { useHistory } from "react-router";
import './SuccessPage.css';

export default function SuccessPage() {
    const history = useHistory();

    return (
        <div className="container">
            <center>
                <div id="successHeaders">
                    <h1>-- Successful account creation! --</h1>
                    <h2>Thank you for supporting us and welcome to our community.
                        <br/>
                        We've glad you're here!
                    </h2>
                </div>
                <div id="successBody">
                    <div>
                        <img id="logo" src="https://m.media-amazon.com/images/I/51zTw14COAL._SL500_.jpg" />
                    </div>
                    <div id="imReadyContinue">
                        <p>I'm ready, let's go!</p>
                        <button id="continueBtn" onClick={() => history.push('/home')}>continue</button>
                    </div>
                </div>
            </center>
        </div>
    );
}