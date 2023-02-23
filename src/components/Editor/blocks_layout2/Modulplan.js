import {useRecoilState} from "recoil";
import {l2Modulplan} from "../../services/atoms";
import {useState} from "react";

function Modulplan() {
    const [modulplan, setModulplan] = useState("");
    const [modulplanstate, setModulplanstate] = useRecoilState(l2Modulplan);
    const addImage = (e) => {
        e.preventDefault()
        setModulplanstate(modulplan);
        setModulplan("");
    }
    return (
        <div className="container">
            <div className="editorTextColor">
                Modulplan:
            </div>
            <input
                type="text"
                id="1"
                value={modulplan}
                placeholder="Bildlink hier einfügen"
                onChange={(e) => setModulplan(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addImage}>
                Submit
            </button>
        </div>
    );
}
export default Modulplan;
