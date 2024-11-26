import rakete from "../../images/Rakete.png";
import { useRecoilValue } from "recoil";
import { l1CourseEntry } from "../../services/atoms";

function ViewKurseinstieg() {
  const einstiegstext = useRecoilValue(l1CourseEntry);
  return (
    <div className="vKurseinstieg">
      <img className="rakete" alt="Rakete" src={rakete} />
      <h1 className="kurseinstiegtitle">Kurseinstieg</h1>
      <div className="kursbeschreibung">
        <div className="kursbeschreibungtext">{einstiegstext}</div>
      </div>
      <button className="modulbutton">Direkt zu den Modulen</button>
    </div>
  );
}
export default ViewKurseinstieg;
