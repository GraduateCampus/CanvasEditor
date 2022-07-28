import {useRecoilValue} from "recoil";
import {ModulplanState} from "../services/atoms";

export default function ViewModulplan() {
    const modulplan = useRecoilValue(ModulplanState);
    return (
        <div className="vModulplan">
            <img className="modulplanimg" src={modulplan} />
        </div>
    )
}
