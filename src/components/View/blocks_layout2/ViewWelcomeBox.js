import {l2WelcomeBackground} from "../../services/atoms";
import {useRecoilValue} from "recoil";

function ViewWelcomeBox() {
    const welcomeBackground = useRecoilValue(l2WelcomeBackground);
    return (
        <div className="vWelcomeBox">
        <img className="headerimage" src={welcomeBackground}>
        </img>
        </div>
    )
}
export default ViewWelcomeBox;