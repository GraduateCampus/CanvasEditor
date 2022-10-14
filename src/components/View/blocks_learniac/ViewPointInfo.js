import { useRecoilValue} from "recoil";
import {learniacPointInfoText} from "../../services/atoms";

function ViewPointInfo() {
    const text = useRecoilValue(learniacPointInfoText);
    return (
        <div>
            <h1 className="lvPointInfoHeader">Wissenswertes</h1>
            <div className="lvPointInfoText">{text}</div>
        </div>
    );
}
export default ViewPointInfo;
