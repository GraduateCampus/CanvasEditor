import {useRecoilState} from "recoil";
import {learniacModulButton} from "../../services/atoms";

function Links() {
    const [courseNumber, setCourseNumber] = useRecoilState(learniacModulButton);

    return (
        <div className="container">
            <form>
                <div>Kursnummer eingeben:</div>
                <input
                    type="text"
                    name="PointWelcomeImage"
                    value={courseNumber}
                    onChange={(e) => setCourseNumber(e.target.value)}
                />
            </form>
        </div>
    );
}
export default Links;
