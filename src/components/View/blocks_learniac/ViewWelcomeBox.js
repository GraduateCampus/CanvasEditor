import { useRecoilValue} from "recoil";
import {
    learniacWelcomeCourse, learniacWelcomeCourse2, learniacWelcomeCourse3,
    learniacWelcomeImage
} from "../../services/atoms";

function ViewWelcomeBox() {
    const image = useRecoilValue(learniacWelcomeImage);
    const course = useRecoilValue(learniacWelcomeCourse);
    const course2 = useRecoilValue(learniacWelcomeCourse2);
    const course3 = useRecoilValue(learniacWelcomeCourse3);
    return (
        <div className="lvWelcomeBox">
            <div>
                <div className="lvWelcomeHeadline">Willkommen im Kurs</div>
                <span className="lvWelcomeHeader line1">{course}</span>
                <span className="lvWelcomeHeader line2">{course2}</span>
                <span className="lvWelcomeHeader line3">{course3}</span>
                <img className="lvHeaderimage" src={image} />
            </div>
        </div>
    );
}
export default ViewWelcomeBox;
