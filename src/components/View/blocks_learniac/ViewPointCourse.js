import { useRecoilValue} from "recoil";
import {learniacPointCourseHeader, learniacPointCourseText} from "../../services/atoms";

function ViewPointCourse() {
    const header = useRecoilValue(learniacPointCourseHeader);
    const text = useRecoilValue(learniacPointCourseText);
    return (
        <div>
            <h1 className="lvPointCourseHeader">{header}</h1>
            <div className="lvPointCourseText">{text}</div>
        </div>
    );
}
export default ViewPointCourse;
