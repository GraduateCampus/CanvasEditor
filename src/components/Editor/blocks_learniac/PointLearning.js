import {useRecoilState} from "recoil";
import {
    learniacPointLearningImage,
    learniacPointLearningText,
} from "../../services/atoms";
import {useState} from "react";

function PointLearning() {
    const [stateImage, setStateImage] = useState("");
    const [pointLearningText, setPointLearningText] = useRecoilState(learniacPointLearningText);
    const [pointLearningImage, setPointLearningImage] = useRecoilState(learniacPointLearningImage);

    const addPointLearningImage = (e) => {
        e.preventDefault()
        setPointLearningImage(stateImage);
        setStateImage("");
    }
    return (
        <div className="container">
            <div className="editorTextColor">Icon-Link eingeben:</div>
            <input
                type="text"
                name="PointLearningImage"
                value={stateImage}
                onChange={(e) => setStateImage(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addPointLearningImage}>Submit</button>
            <div className="editorTextColor">Learningtext einfügen:</div>
            <textarea
                type="text"
                name="PointLearningText"
                rows="5"
                cols="70"
                value={pointLearningText}
                onChange={(e) => setPointLearningText(e.target.value)}
            />
        </div>
    );
}
export default PointLearning;
