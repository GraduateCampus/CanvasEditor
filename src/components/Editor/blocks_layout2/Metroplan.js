import {useRecoilState} from "recoil";
import {l2Metroplan, l2MetroplanCheckbox} from "../../services/atoms";

function Metroplan() {
    const [metroplan, setMetroplan] = useRecoilState(l2Metroplan);
    const [metroplanCheckbox, setMetroplanCheckbox] = useRecoilState(l2MetroplanCheckbox);
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
                <div>Metroplan deaktivieren?:</div>
                <input
                    type="checkbox"
                    className="modulplancheckbox"
                    checked={metroplanCheckbox}
                    onChange={(e) => setMetroplanCheckbox(e.target.checked)}
                />
            </form>
        </div>

    );
}
export default Metroplan;
