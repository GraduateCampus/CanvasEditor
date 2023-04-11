import { useRecoilValue} from "recoil";
import {
    learniacWelcomeImage, learniacWelcomeText
} from "../../services/atoms";

function ViewWelcomeBox() {
    const header = useRecoilValue(learniacWelcomeText);
    const image = useRecoilValue(learniacWelcomeImage);
    return (
        <div className="lvWelcomeBox">
                <span className="lvWelcomeHeadline">{header}</span>
                <img className="lvHeaderimage" src={image} />
        </div>
    );
}
export default ViewWelcomeBox;
