import {useRecoilState} from "recoil";
import {welcomeBoxCourse, welcomeBoxCourse2, welcomeBoxImage, welcomeBoxText} from "../../services/atoms"
import {useState} from "react";

function WelcomeBox () {
    const [stateImage, setStateImage] = useState("");
    const [stateText, setStateText] = useState("");
    const [stateCourse, setStateCourse] = useState("");
    const [stateCourse2, setStateCourse2] = useState("");
    const [welcomeImage, setWelcomeImage] = useRecoilState(welcomeBoxImage);
    const [welcomeText, setWelcomeText] = useRecoilState(welcomeBoxText);
    const [welcomeCourse, setWelcomeCourse] = useRecoilState(welcomeBoxCourse);
    const [welcomeCourse2, setWelcomeCourse2] = useRecoilState(welcomeBoxCourse2);

    const addWelcomeImage = (e) => {
        e.preventDefault()
        setWelcomeImage(stateImage);
        setStateImage("");
    }
    const addWelcomeText = (e) => {
        e.preventDefault()
        setWelcomeText(stateText);
        setStateText("");
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
    return (
        <div className="container">
            <form name="welcomeBox">
                <div className="field">
                    <div className="editorTextColor">Hintergrundbild / Dateiname:</div>
                    <input
                        type="text"
                        value={stateImage}
                        placeholder="Hintergrundbild/Dateiname"
                        onChange={(e) => setStateImage(e.target.value)}
                    />
                    <button className="editorsubmitbtn" onClick={addWelcomeImage}>Submit</button>
                    <div className="editorTextColor">Headline:</div>
                    <input
                        type="text"
                        value={stateText}
                        placeholder="Willkommen"
                        onChange={(e) => setStateText(e.target.value)}
                    />
                    <button className="editorsubmitbtn" onClick={addWelcomeText}>Submit</button>
                    <div className="editorTextColor">Kursname 1. Zeile:</div>
                    <input
                        type="text"
                        value={stateCourse}
                        placeholder="Kursname 1"
                        onChange={(e) => setStateCourse(e.target.value)}
                    />
                    <button className="editorsubmitbtn" onClick={addWelcomeCourse}>Submit</button>
                    <div className="editorTextColor">Kursname 2. Zeile:</div>
                    <input
                        type="text"
                        value={stateCourse2}
                        placeholder="Kursname 2"
                        onChange={(e) => setStateCourse2(e.target.value)}
                    />
                    <button className="editorsubmitbtn" onClick={addWelcomeCourse2}>Submit</button>
                </div>
            </form>
        </div>
    );
}
export default WelcomeBox;
