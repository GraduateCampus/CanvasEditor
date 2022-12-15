import { useRecoilValue} from "recoil";
import {learniacPointLearningHeader, learniacPointLearningText} from "../../services/atoms";

function ViewPointLearning() {
    const header = useRecoilValue(learniacPointLearningHeader);
    const text = useRecoilValue(learniacPointLearningText);
    return (
        <div>
            <h1 className="lvPointLearningHeader">{header}</h1>
            <div className="lvPointLearningText">
                {text}
                <a href="nix" className="lvDownload">Download</a>
            </div>
        </div>
    );
}
export default ViewPointLearning;
