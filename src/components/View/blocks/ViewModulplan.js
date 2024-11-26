import { useRecoilValue } from "recoil";
import { l1Metroplan } from "../../services/atoms";

export default function ViewModulplan() {
  const modulplan = useRecoilValue(l1Metroplan);
  return (
    <div className="vModulplan">
      <img className="modulplanimg" alt="Modulplan Bild" src={modulplan} />
    </div>
  );
}
