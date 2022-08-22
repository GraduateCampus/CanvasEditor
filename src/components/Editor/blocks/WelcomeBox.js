import {useRecoilState} from "recoil";
import {welcomeBoxCourse, welcomeBoxImage, welcomeBoxText} from "../../services/atoms"
import {useState} from "react";

function WelcomeBox () {
    const [stateImage, setStateImage] = useState("");
    const [stateText, setStateText] = useState("");
    const [stateCourse, setStateCourse] = useState("");
    const [welcomeImage, setWelcomeImage] = useRecoilState(welcomeBoxImage);
    const [welcomeText, setWelcomeText] = useRecoilState(welcomeBoxText);
    const [welcomeCourse, setWelcomeCourse] = useRecoilState(welcomeBoxCourse);

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
                    <div className="editorTextColor">Kursname:</div>
                    <input
                        type="text"
                        value={stateCourse}
                        placeholder="Kursname"
                        onChange={(e) => setStateCourse(e.target.value)}
                    />
                    <button className="editorsubmitbtn" onClick={addWelcomeCourse}>Submit</button>
                </div>
            </form>
        </div>
    );
}
export default WelcomeBox;
