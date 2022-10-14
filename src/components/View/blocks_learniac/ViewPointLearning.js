import { useRecoilValue} from "recoil";
import {learniacPointLearningText} from "../../services/atoms";

function ViewPointLearning() {
    const text = useRecoilValue(learniacPointLearningText);
    return (
        <div>
            <h1 className="lvPointLearningHeader">Mit E-Learnings lernen</h1>
            <div className="lvPointLearningText">
                {text}
                <a href="nix" className="lvDownload">Download</a>
            </div>
        </div>
    );
}
export default ViewPointLearning;
