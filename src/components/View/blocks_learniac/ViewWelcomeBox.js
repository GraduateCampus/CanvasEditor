import { useRecoilValue} from "recoil";
import {
    learniacWelcomeCourse, learniacWelcomeCourse2, learniacWelcomeCourse3,
    learniacWelcomeImage, learniacWelcomeText
} from "../../services/atoms";

function ViewWelcomeBox() {
    const header = useRecoilValue(learniacWelcomeText);
    const image = useRecoilValue(learniacWelcomeImage);
    const course = useRecoilValue(learniacWelcomeCourse);
    const course2 = useRecoilValue(learniacWelcomeCourse2);
    const course3 = useRecoilValue(learniacWelcomeCourse3);
    return (
        <div className="lvWelcomeBox">
            <div>
                <div className="lvWelcomeHeadline">{header}</div>
                <span className="lvWelcomeHeader line1">{course}</span>
                <span className="lvWelcomeHeader line2">{course2}</span>
                <span className="lvWelcomeHeader line3">{course3}</span>
                <img className="lvHeaderimage" src={image} />
            </div>
        </div>
    );
    /*
    return (
        <div className="testbox">
                <h1>WILLKOMMEN BEI
                    <img className="testimg" src="https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Element%206.png?raw=true"/></h1>
        </div>
    )*/
}
export default ViewWelcomeBox;
