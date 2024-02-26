import { useRecoilValue} from "recoil";
import {l1WelcomeCourseName, l1WelcomeCourseName2, l1WelcomeBackground, l1WelcomeText} from "../../services/atoms";

function ViewWelcomeBox() {
    const image = useRecoilValue(l1WelcomeBackground);
    const welcomeText = useRecoilValue(l1WelcomeText);
    const welcomeCourse = useRecoilValue(l1WelcomeCourseName);
    const welcomeCourse2 = useRecoilValue(l1WelcomeCourseName2);
    return (
        <div className="vWelcomeBox">
            <div>
                <img className="headerimage" alt={""} src={image} />
            </div>
            <div className="headline">
                {welcomeText}
            </div>
            <div className="kursname">
                {welcomeCourse}
            </div>
            <div className="kursname2">
                {welcomeCourse2}
            </div>
        </div>
    );
}
export default ViewWelcomeBox;
