import { useRecoilValue } from "recoil";
import { l2Metroplan } from "../../services/atoms";

export default function ViewModulplan() {
  const modulplan = useRecoilValue(l2Metroplan);
  return (
    <div className="vModulplan">
      <img className="modulplanimg" alt="modulplanimage" src={modulplan} />
    </div>
  );
}
