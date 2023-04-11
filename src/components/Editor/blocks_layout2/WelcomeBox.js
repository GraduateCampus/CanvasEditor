import {useRecoilState} from "recoil";
import {l2WelcomeBackground, l2WelcomeCourseName, l2WelcomeCourseName2, l2WelcomeHeadline} from "../../services/atoms";

function WelcomeBox () {
    const [welcomeBackground, setWelcomeBackground] = useRecoilState(l2WelcomeBackground);
    const [welcomeHeadline, setWelcomeHeadline] = useRecoilState(l2WelcomeHeadline);
    const [welcomeCourseName, setWelcomeCourseName] = useRecoilState(l2WelcomeCourseName);
    const [welcomeCourseName2, setWelcomeCourseName2] = useRecoilState(l2WelcomeCourseName2);

    return (
        <div className="container">
            <form name="welcomeBox">
                <div className="field">
                    <div className="editorTextColor">Hintergrundbild:</div>
                    <input className="inputMarginWelcomeBox"
                        type="text"
                        value={welcomeBackground}
                        placeholder="Hier Link einfügen"
                        onChange={(e) => setWelcomeBackground(e.target.value)}
                    />
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