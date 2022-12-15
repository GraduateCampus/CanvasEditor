import { useRecoilValue} from "recoil";
import {learniacPointInfoHeader, learniacPointInfoText} from "../../services/atoms";

function ViewPointInfo() {
    const header = useRecoilValue(learniacPointInfoHeader);
    const text = useRecoilValue(learniacPointInfoText);
    return (
        <div>
            <h1 className="lvPointInfoHeader">{header}</h1>
            <div className="lvPointInfoText">{text}</div>
        </div>
    );
}
export default ViewPointInfo;
