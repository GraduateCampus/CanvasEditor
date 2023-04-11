import {useRecoilState} from "recoil";
import {l2Modulplan} from "../../services/atoms";

function Modulplan() {
    const [modulplan, setModulplan] = useRecoilState(l2Modulplan);
    return (
        <div className="container">
            <form>
            <div>
                Modulplan:
            </div>
            <input
                type="text"
                id="1"
                value={modulplan}
                placeholder="Bildlink hier einfügen"
                onChange={(e) => setModulplan(e.target.value)}
            />
            </form>
        </div>

    );
}
export default Modulplan;
