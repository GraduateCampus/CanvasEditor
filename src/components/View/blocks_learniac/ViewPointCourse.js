import { useRecoilValue} from "recoil";
import {learniacPointCourseText} from "../../services/atoms";

function ViewPointCourse() {
    const text = useRecoilValue(learniacPointCourseText);
    return (
        <div>
            <h1 className="lvPointCourseHeader">Kursablauf</h1>
            <div className="lvPointCourseText">{text}</div>
        </div>
    );
}
export default ViewPointCourse;
