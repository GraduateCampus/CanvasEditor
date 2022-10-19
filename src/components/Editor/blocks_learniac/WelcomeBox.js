import {useRecoilState} from "recoil";
import {
    learniacModulButton,
    learniacWelcomeCourse,
    learniacWelcomeCourse2,
    learniacWelcomeCourse3,
    learniacWelcomeImage,
} from "../../services/atoms";
import {useState} from "react";

function WelcomeBox() {
    const [stateImage, setStateImage] = useState("");
    const [stateCourse, setStateCourse] = useState("");
    const [stateCourse2, setStateCourse2] = useState("");
    const [stateCourse3, setStateCourse3] = useState("");
    const [stateNumber, setStateNumber] = useState("");
    const [welcomeImage, setWelcomeImage] = useRecoilState(learniacWelcomeImage);
    const [welcomeCourse, setWelcomeCourse] = useRecoilState(learniacWelcomeCourse);
    const [welcomeCourse2, setWelcomeCourse2] = useRecoilState(learniacWelcomeCourse2);
    const [welcomeCourse3, setWelcomeCourse3] = useRecoilState(learniacWelcomeCourse3);
    const [kursnummer, setCourseNumber] = useRecoilState(learniacModulButton);

    const addWelcomeImage = (e) => {
        e.preventDefault()
        setWelcomeImage(stateImage);
        setStateImage("");
    }
    const addWelcomeCourse = (e) => {
        e.preventDefault()
        setWelcomeCourse(stateCourse);
        setStateCourse("");
    }
    const addWelcomeCourse2 = (e) => {
        e.preventDefault()
        setWelcomeCourse2(stateCourse2);
        setStateCourse2("");
    }
    const addWelcomeCourse3 = (e) => {
        e.preventDefault()
        setWelcomeCourse3(stateCourse3);
        setStateCourse3("");
    }
    const addCourseNumber = (e) => {
        e.preventDefault()
        setCourseNumber(stateNumber);
        setStateNumber("");
    }

    return (
        <div className="container">
            <div className="editorTextColor">Kursbild eingeben:</div>
            <input
                type="text"
                name="WelcomeBox"
                value={stateImage}
                onChange={(e) => setStateImage(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addWelcomeImage}>Submit</button>
            <div className="editorTextColor">Kursname Zeile 1 eingeben:</div>
            <input
                type="text"
                name="WelcomeBox"
                value={stateCourse}
                onChange={(e) => setStateCourse(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addWelcomeCourse}>Submit</button>
            <div className="editorTextColor">Kursname Zeile 2 eingeben:</div>
            <input
                type="text"
                name="WelcomeBox2"
                value={stateCourse2}
                onChange={(e) => setStateCourse2(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addWelcomeCourse2}>Submit</button>
            <div className="editorTextColor">Kursname Zeile 3 eingeben:</div>
            <input
                type="text"
                name="WelcomeBox3"
                value={stateCourse3}
                onChange={(e) => setStateCourse3(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addWelcomeCourse3}>Submit</button>
            <div className="editorTextColor">Kursnummer eingeben:</div>
            <input
                type="text"
                name="Kursnummer"
                value={stateNumber}
                onChange={(e) => setStateNumber(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addCourseNumber}>Submit</button>
        </div>

    );
}
export default WelcomeBox;
