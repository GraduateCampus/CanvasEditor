import { useRecoilState } from "recoil";
import {
  learniacDownloadButtonLink,
  learniacModulButton,
} from "../../services/atoms";

function Links() {
  const [courseNumber, setCourseNumber] = useRecoilState(learniacModulButton);
  const [downloadLink, setDownloadLink] = useRecoilState(
    learniacDownloadButtonLink
  );

  return (
    <div className="container">
      <form>
        <div>Kursnummer eingeben:</div>
        <input
          type="text"
          name="PointWelcomeImage"
          value={courseNumber}
          onChange={(e) => setCourseNumber(e.target.value)}
        />
        <div>Donwload-Link ändern:</div>
        <input
          type="text"
          name="learniacDownloadButtonLink"
          value={downloadLink}
          onChange={(e) => setDownloadLink(e.target.value)}
        />
      </form>
    </div>
  );
}
export default Links;
