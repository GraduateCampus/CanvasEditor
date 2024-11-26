import { useRecoilState } from "recoil";
import {
  learniacPointInfoImage,
  learniacPointInfoText,
} from "../../services/atoms";

function PointInfo() {
  const [pointInfoText, setPointInfoText] = useRecoilState(
    learniacPointInfoText
  );
  const [pointInfoImage, setPointInfoImage] = useRecoilState(
    learniacPointInfoImage
  );

  return (
    <div className="container">
      <form>
        <div className="editorTextColor">Icon-Link eingeben:</div>
        <input
          type="text"
          name="PointInfoImage"
          value={pointInfoImage}
          onChange={(e) => setPointInfoImage(e.target.value)}
        />
        <div className="editorTextColor">Infotext einfügen:</div>
        <textarea
          type="text"
          name="PointInfoText"
          rows="5"
          cols="40"
          value={pointInfoText}
          onChange={(e) => setPointInfoText(e.target.value)}
        />
      </form>
    </div>
  );
}
export default PointInfo;
