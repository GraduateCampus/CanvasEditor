import {useRecoilState} from "recoil";
import {ModulplanState} from "../../services/atoms";

function Modulplan() {
    const [modulplan, setModulplan] = useRecoilState(ModulplanState);
    return (
        <div className="container">
            <form>
            <div className="editorTextColor">Modulplan:</div>
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
