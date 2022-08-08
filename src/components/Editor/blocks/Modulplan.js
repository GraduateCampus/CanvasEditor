import {useRecoilState} from "recoil";
import {ModulplanState} from "../../services/atoms";
import {useState} from "react";

function Modulplan() {
    const [modulplan, setModulplan] = useState("");
    const [modulplanstate, setModulplanstate] = useRecoilState(ModulplanState);
    const addImage = (e) => {
        e.preventDefault()
        var modullink = document.getElementById("1");
        if (modullink && modullink.value) {
            setModulplanstate(modulplan);
            setModulplan("");
        }
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
