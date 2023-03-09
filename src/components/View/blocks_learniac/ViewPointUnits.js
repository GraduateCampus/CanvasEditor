import { useRecoilValue} from "recoil";
import {
    learniacPointUnits,
    learniacPointUnitsHeader, learniacPointUnitsText,
} from "../../services/atoms";

function ViewPointUnits() {
    const header = useRecoilValue(learniacPointUnitsHeader);
    const text = useRecoilValue(learniacPointUnitsText);
    const units = useRecoilValue(learniacPointUnits);
    return (
        <div>
            <h1 className="lvPointUnitsHeader">{header}</h1>
            <div className="lvPointUnitsText">
                {text}
            </div>
            <div>
                {units.map((units, index) => (
                <li className="lvPointUnits" key={index}>{index+1}. {units}</li>
                ))}
            </div>
        </div>
    );
}
export default ViewPointUnits;
