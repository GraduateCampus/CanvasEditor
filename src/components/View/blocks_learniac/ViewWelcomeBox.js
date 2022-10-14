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
                <p>{course}</p>
                <p>{course2}</p>
                <p>{course3}</p>
                <img className="lvHeaderimage" src={image} />
            </div>
        </div>
    );
}
export default ViewWelcomeBox;
