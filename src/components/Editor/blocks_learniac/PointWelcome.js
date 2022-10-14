import {useRecoilState} from "recoil";
import {learniacPointWelcomeImage, learniacPointWelcomeText} from "../../services/atoms";
import {useState} from "react";

function PointWelcome() {
    const [stateImage, setStateImage] = useState("");
    const [pointWelcomeImage, setPointWelcomeImage] = useRecoilState(learniacPointWelcomeText);
    const [pointWelcomeText, setPointWelcomeText] = useRecoilState(learniacPointWelcomeImage);

    const addPointWelcomeImage = (e) => {
        e.preventDefault()
        setPointWelcomeImage(stateImage);
        setStateImage("");
    }

    return (
        <div className="container">
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
                cols="70"
                value={pointWelcomeText}
                onChange={(e) => setPointWelcomeText(e.target.value)}
            />
        </div>
    );
}
export default PointWelcome;
