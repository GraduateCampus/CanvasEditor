import {useRecoilState} from "recoil";
import {
    learniacModulButton,
    learniacWelcomeCourse,
    learniacWelcomeCourse2,
    learniacWelcomeCourse3,
    learniacWelcomeImage,
} from "../../services/atoms";
function WelcomeBox() {
    const [welcomeImage, setWelcomeImage] = useRecoilState(learniacWelcomeImage);
    const [welcomeCourse, setWelcomeCourse] = useRecoilState(learniacWelcomeCourse);
    const [welcomeCourse2, setWelcomeCourse2] = useRecoilState(learniacWelcomeCourse2);
    const [welcomeCourse3, setWelcomeCourse3] = useRecoilState(learniacWelcomeCourse3);
    const [kursnummer, setCourseNumber] = useRecoilState(learniacModulButton);

    return (
        <div className="container">
            <form>
            <div className="editorTextColor">Kursbild eingeben:</div>
            <input
                type="text"
                name="WelcomeBox"
                value={welcomeImage}
                onChange={(e) => setWelcomeImage(e.target.value)}
            />
            <div className="editorTextColor">Kursname Zeile 1 eingeben:</div>
            <input
                type="text"
                name="WelcomeBox"
                value={welcomeCourse}
                onChange={(e) => setWelcomeCourse(e.target.value)}
            />
            <div className="editorTextColor">Kursname Zeile 2 eingeben:</div>
            <input
                type="text"
                name="WelcomeBox2"
                value={welcomeCourse2}
                onChange={(e) => setWelcomeCourse2(e.target.value)}
            />
            <div className="editorTextColor">Kursname Zeile 3 eingeben:</div>
            <input
                type="text"
                name="WelcomeBox3"
                value={welcomeCourse3}
                onChange={(e) => setWelcomeCourse3(e.target.value)}
            />
            <div className="editorTextColor">Kursnummer eingeben:</div>
            <input
                type="text"
                name="Kursnummer"
                value={kursnummer}
                onChange={(e) => setCourseNumber(e.target.value)}
            />
            </form>
        </div>

    );
}
export default WelcomeBox;
