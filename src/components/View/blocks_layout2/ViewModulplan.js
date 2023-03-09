import {useRecoilValue} from "recoil";
import {l2Modulplan} from "../../services/atoms";

export default function ViewModulplan() {
    const modulplan = useRecoilValue(l2Modulplan);
    return (
        <div className="vModulplan">
            <img className="modulplanimg" src={modulplan} />
        </div>
    )
}
