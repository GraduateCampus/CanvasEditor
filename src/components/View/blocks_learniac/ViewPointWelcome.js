import { useRecoilValue} from "recoil";
import {learniacModulButtonText, learniacPointWelcomeHeader, learniacPointWelcomeText} from "../../services/atoms";

function ViewPointWelcome() {
    const header = useRecoilValue(learniacPointWelcomeHeader);
    const buttontext = useRecoilValue(learniacModulButtonText);
    const text = useRecoilValue(learniacPointWelcomeText);
    return (
        <div>
            <h1 className="lvPointWelcomeHeader">{header}</h1>
            <div className="lvPointWelcomeText">
                {text}
                <br />
                <a href="nix" className="lvModulButton">{buttontext}</a>
            </div>
        </div>
    );
}
export default ViewPointWelcome;
