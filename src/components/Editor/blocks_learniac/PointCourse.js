import {useRecoilState} from "recoil";
import {
    learniacPointCourseText,
    learniacPointWelcomeImage,
} from "../../services/atoms";
import {useState} from "react";

function PointCourse() {
    const [stateImage, setStateImage] = useState("");
    const [pointCourseText, setPointCourseText] = useRecoilState(learniacPointCourseText);
    const [pointCourseImage, setPointCourseImage] = useRecoilState(learniacPointWelcomeImage);

    const addPointCourseImage = (e) => {
        e.preventDefault()
        setPointCourseImage(stateImage);
        setStateImage("");
    }
    return (
        <div className="container">
            <div className="editorTextColor">Icon-Link eingeben:</div>
            <input
                type="text"
                name="PointCourseImage"
                value={stateImage}
                onChange={(e) => setStateImage(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addPointCourseImage}>Submit</button>
            <div className="editorTextColor">Kurstext einfügen:</div>
            <textarea
                type="text"
                name="PointCourseText"
                rows="5"
                cols="70"
                value={pointCourseText}
                onChange={(e) => setPointCourseText(e.target.value)}
            />
        </div>
    );
}
export default PointCourse;
