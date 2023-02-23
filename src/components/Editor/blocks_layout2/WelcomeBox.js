import {useRecoilState} from "recoil";
import {l2WelcomeBackground, l2WelcomeCourseName, l2WelcomeCourseName2, l2WelcomeHeadline} from "../../services/atoms";
import {useState} from "react";

function WelcomeBox () {
    const [stateBackground, setStateBackground] = useState("");
    const [welcomeBackground, setWelcomeBackground] = useRecoilState(l2WelcomeBackground);
    const [welcomeHeadline, setWelcomeHeadline] = useRecoilState(l2WelcomeHeadline);
    const [welcomeCourseName, setWelcomeCourseName] = useRecoilState(l2WelcomeCourseName);
    const [welcomeCourseName2, setWelcomeCourseName2] = useRecoilState(l2WelcomeCourseName2);
    const addWelcomeBackground = (e) => {
        e.preventDefault();
        setWelcomeBackground(stateBackground);
        setStateBackground("");
    }
    return (
        <div className="container">
            <form name="welcomeBox">
                <div className="field">
                    <div className="editorTextColor">Hintergrundbild:</div>
                    <input className="inputMarginWelcomeBox"
                        type="text"
                        value={stateBackground}
                        placeholder="Hier Link einfügen"
                        onChange={(e) => setStateBackground(e.target.value)}
                    />
                    <button className="editorsubmitbtn" onClick={addWelcomeBackground}>Submit</button>
                    <div className="editorTextColor">Headline:</div>
                    <input
                        type="text"
                        value={welcomeHeadline}
                        placeholder="Willkommen im Kurs..."
                        onChange={(e) => setWelcomeHeadline(e.target.value)}
                    />
                    <div className="editorTextColor">Kursname 1. Zeile:</div>
                    <input
                        type="text"
                        value={welcomeCourseName}
                        placeholder="1. Zeile für Kursnamen"
                        onChange={(e) => setWelcomeCourseName(e.target.value)}
                    />
                    <div className="editorTextColor">Kursname 2. Zeile:</div>
                    <input
                        type="text"
                        value={welcomeCourseName2}
                        placeholder="2. Zeile für Kursnamen"
                        onChange={(e) => setWelcomeCourseName2(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}
export default WelcomeBox;