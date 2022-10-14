import { useRecoilValue} from "recoil";
import {learniacPointWelcomeText} from "../../services/atoms";

function ViewPointWelcome() {
    const text = useRecoilValue(learniacPointWelcomeText);
    return (
        <div>
            <h1 className="lvPointWelcomeHeader">Willkommen im Kurs</h1>
            <div className="lvPointWelcomeText">
                {text}
                <br />
                <a href="nix" className="lvModulButton">Zu den Modulen</a>
            </div>
        </div>
    );
}
export default ViewPointWelcome;
