import {useRecoilState} from "recoil";
import {l1CourseEntry, l1CourseNr} from "../../services/atoms";

function CourseEntry() {
    const [courseEntry, setCourseEntry] = useRecoilState(l1CourseEntry);
    const [courseNr, setCourseNr] = useRecoilState(l1CourseNr);
    return (
        <div className="container">
            <form>
                <div className="editorTextColor">Kursbeschreibung:</div>
            <textarea
                id="beschreibung"
                rows="10"
                cols="40"
                value={courseEntry}
                placeholder="Kursbeschreibung hier einfügen"
                onChange={(e) => setCourseEntry(e.target.value)}
            />
            <div className="editorTextColor">Kursnummer einfügen:</div>
            <input
                type="text"
                name="Kursnummer"
                value={courseNr}
                placeholder="Kursnummer hier einfügen"
                onChange={(e) => setCourseNr(e.target.value)}
            />
            </form>
        </div>
    );
}
export default CourseEntry;
