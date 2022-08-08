import {useRecoilState} from "recoil";
import {KurseinstiegState, Modulbutton} from "../../services/atoms";

function Kurseinstieg() {
    const [kursBeschreibung, setKursbeschreibung] = useRecoilState(KurseinstiegState);
    const [kursnummer, setKursnummer] = useRecoilState(Modulbutton);
    return (
        <div className="container">
            <div className="editorTextColor">Kursbeschreibung:</div>
            <textarea
                id="beschreibung"
                rows="10"
                cols="70"
                value={kursBeschreibung}
                placeholder="Kursbeschreibung hier einfügen"
                onChange={(e) => setKursbeschreibung(e.target.value)}
            />
            <div className="editorTextColor">Kursnummer einfügen:</div>
            <input
                type="text"
                name="Kursnummer"
                value={kursnummer}
                onChange={(e) => setKursnummer(e.target.value)}

            />
        </div>
    );
}
export default Kurseinstieg;
