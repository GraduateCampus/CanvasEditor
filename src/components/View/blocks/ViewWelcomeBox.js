import headerimgbg from "../../images/Headerbild_ObjProg.png";
import { useRecoilValue} from "recoil";
import {welcomeBoxCourse, welcomeBoxImage, welcomeBoxText} from "../../services/atoms";

function ViewWelcomeBox() {
    const image = useRecoilValue(welcomeBoxImage)
    const welcomeText = useRecoilValue(welcomeBoxText)
    const welcomeCourse = useRecoilValue(welcomeBoxCourse)
    /* const deletewText = (id) =>  {
        const newWtext = header.filter((_, item) => item !== id);
        setHeaderState(newWtext);
    }
     */
    return (
        <div className="vWelcomeBox">
            <div>
                <img className="headerimage" src={image} />
            </div>
            <div className="headline">
                {welcomeText}
            </div>
            <div className="kursname">
                {welcomeCourse}
            </div>
        </div>
    );
}
export default ViewWelcomeBox;
