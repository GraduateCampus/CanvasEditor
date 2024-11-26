import rakete from "../../images/Rakete.png";
import { useRecoilValue } from "recoil";
import { l2CourseEntry } from "../../services/atoms";

function ViewCourseEntry() {
  const courseEntryState = useRecoilValue(l2CourseEntry);
  return (
    <div className="vKurseinstieg">
      <img className="rakete" alt="Rakete" src={rakete} />
      <h1 className="kurseinstiegtitle">Kurseinstieg</h1>
      <div className="kursbeschreibung">
        <div className="kursbeschreibungtext">{courseEntryState}</div>
      </div>
      <button className="modulbutton">Direkt zu den Modulen</button>
    </div>
  );
}
export default ViewCourseEntry;
