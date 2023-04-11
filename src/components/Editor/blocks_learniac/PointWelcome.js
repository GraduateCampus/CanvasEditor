import {useRecoilState} from "recoil";
import {learniacPointWelcomeImage, learniacPointWelcomeText} from "../../services/atoms";
import {useState} from "react";

function PointWelcome() {
    const [stateImage, setStateImage] = useState("");
    const [pointWelcomeImage, setPointWelcomeImage] = useRecoilState(learniacPointWelcomeImage);
    const [pointWelcomeText, setPointWelcomeText] = useRecoilState(learniacPointWelcomeText);

    const addPointWelcomeImage = (e) => {
        e.preventDefault()
        setPointWelcomeImage(stateImage);
        setStateImage("");
    }

    return (
        <div className="container">
            <form>
            <div className="editorTextColor">Icon-Link eingeben:</div>
            <input
                type="text"
                name="PointWelcomeImage"
                value={stateImage}
                onChange={(e) => setStateImage(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addPointWelcomeImage}>Submit</button>
            <div className="editorTextColor">Willkommenstext einfügen:</div>
            <textarea
                type="text"
                name="PointWelcomeText"
                rows="5"
                cols="40"
                value={pointWelcomeText}
                onChange={(e) => setPointWelcomeText(e.target.value)}
            />
            </form>
        </div>
    );
}
export default PointWelcome;
