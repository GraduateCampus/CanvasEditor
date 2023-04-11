import {useRecoilState} from "recoil";
import {KurseinstiegState, Modulbutton} from "../../services/atoms";

function CourseEntry() {
    const [kursBeschreibung, setKursbeschreibung] = useRecoilState(KurseinstiegState);
    const [kursnummer, setKursnummer] = useRecoilState(Modulbutton);
    return (
        <div className="container">
            <form name="CourseEntry">
                <div className="editorTextColor">Kursbeschreibung:</div>
            <textarea
                id="beschreibung"
                rows="10"
                cols="40"
                value={kursBeschreibung}
                placeholder="Kursbeschreibung hier einfügen"
                onChange={(e) => setKursbeschreibung(e.target.value)}
            />
            <div className="editorTextColor">Kursnummer einfügen:</div>
            <input
                type="text"
                name="Kursnummer"
                value={kursnummer}
                placeholder="Nummer von der URL einfügen"
                onChange={(e) => setKursnummer(e.target.value)}
            />
            </form>
        </div>
    );
}
export default CourseEntry;
