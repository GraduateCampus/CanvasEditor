import {useRecoilState} from "recoil";
import {l1WelcomeCourseName, l1WelcomeCourseName2, l1WelcomeBackground, l1WelcomeText} from "../../services/atoms"

function WelcomeBox () {
    const [welcomeBackground, setWelcomeBackground] = useRecoilState(l1WelcomeBackground);
    const [welcomeText, setWelcomeText] = useRecoilState(l1WelcomeText);
    const [welcomeCourse, setWelcomeCourse] = useRecoilState(l1WelcomeCourseName);
    const [welcomeCourse2, setWelcomeCourse2] = useRecoilState(l1WelcomeCourseName2);
    return (
        <div className="container">
            <form name="welcomeBox">
                <div>Hintergrundbild:</div>
                <input
                    type="text"
                    value={welcomeBackground}
                    placeholder="Hier Link einfügen"
                    onChange={(e) => setWelcomeBackground(e.target.value)}
                />
                <div>Headline:</div>
                <input
                    type="text"
                    value={welcomeText}
                    placeholder="Willkommen im Kurs..."
                    onChange={(e) => setWelcomeText(e.target.value)}
                />
                <div>Kursname 1. Zeile:</div>
                <input
                    type="text"
                    value={welcomeCourse}
                    placeholder="1. Zeile für Kursnamen"
                    onChange={(e) => setWelcomeCourse(e.target.value)}
                />
                <div>Kursname 2. Zeile:</div>
                <input
                    type="text"
                    value={welcomeCourse2}
                    placeholder="2. Zeile für Kursnamen"
                    onChange={(e) => setWelcomeCourse2(e.target.value)}
                />
            </form>
        </div>
    );
}
export default WelcomeBox;
