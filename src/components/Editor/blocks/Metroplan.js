import {useRecoilState} from "recoil";
import {l1Metroplan} from "../../services/atoms";

function Metroplan() {
    const [metroplan, setMetroplan] = useRecoilState(l1Metroplan);
    return (
        <div className="container">
            <form>
                <div>
                    Modulplan:
                </div>
                <input
                    type="text"
                    id="1"
                    value={metroplan}
                    placeholder="Bildlink hier einfügen"
                    onChange={(e) => setMetroplan(e.target.value)}
                />
            </form>
        </div>

    );
}
export default Metroplan;
