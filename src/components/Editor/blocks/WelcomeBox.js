import {useRecoilState} from "recoil";
import {welcomeBoxCourse, welcomeBoxCourse2, welcomeBoxImage, welcomeBoxText} from "../../services/atoms"

function WelcomeBox () {
    const [welcomeImage, setWelcomeImage] = useRecoilState(welcomeBoxImage);
    const [welcomeText, setWelcomeText] = useRecoilState(welcomeBoxText);
    const [welcomeCourse, setWelcomeCourse] = useRecoilState(welcomeBoxCourse);
    const [welcomeCourse2, setWelcomeCourse2] = useRecoilState(welcomeBoxCourse2);
    return (
        <div className="container">
            <form name="welcomeBox">
                <div>Hintergrundbild:</div>
                <input
                    type="text"
                    value={welcomeImage}
                    placeholder="Hintergrundbild"
                    onChange={(e) => setWelcomeImage(e.target.value)}
                />
                <div>Headline:</div>
                <input
                    type="text"
                    value={welcomeText}
                    placeholder="Willkommen"
                    onChange={(e) => setWelcomeText(e.target.value)}
                />
                <div>Kursname 1. Zeile:</div>
                <input
                    type="text"
                    value={welcomeCourse}
                    placeholder="Kursname 1"
                    onChange={(e) => setWelcomeCourse(e.target.value)}
                />
                <div>Kursname 2. Zeile:</div>
                <input
                    type="text"
                    value={welcomeCourse2}
                    placeholder="Kursname 2"
                    onChange={(e) => setWelcomeCourse2(e.target.value)}
                />
            </form>
        </div>
    );
}
export default WelcomeBox;
