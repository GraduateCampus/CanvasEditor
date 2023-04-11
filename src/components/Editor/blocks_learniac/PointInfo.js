import {useRecoilState} from "recoil";
import {learniacPointInfoImage, learniacPointInfoText} from "../../services/atoms";
import {useState} from "react";

function PointInfo() {
    const [stateImage, setStateImage] = useState("");
    const [pointInfoText, setPointInfoText] = useRecoilState(learniacPointInfoText);
    const [pointInfoImage, setPointInfoImage] = useRecoilState(learniacPointInfoImage);
    const addPointInfoImage = (e) => {
        e.preventDefault()
        setPointInfoImage(stateImage);
        setStateImage("");
    }
    return (
        <div className="container">
            <form>
            <div className="editorTextColor">Icon-Link eingeben:</div>
            <input
                type="text"
                name="PointInfoImage"
                value={stateImage}
                onChange={(e) => setStateImage(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addPointInfoImage}>Submit</button>
            <div className="editorTextColor">Infotext einfügen:</div>
            <textarea
                type="text"
                name="PointInfoText"
                rows="5"
                cols="40"
                value={pointInfoText}
                onChange={(e) => setPointInfoText(e.target.value)}
            />
        </form>
        </div>
    );
}
export default PointInfo;
