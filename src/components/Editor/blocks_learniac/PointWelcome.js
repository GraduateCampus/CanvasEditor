import { useRecoilState } from "recoil";
import {
  learniacPointWelcomeImage,
  learniacPointWelcomeText,
} from "../../services/atoms";

function PointWelcome() {
  const [pointWelcomeImage, setPointWelcomeImage] = useRecoilState(
    learniacPointWelcomeImage
  );
  const [pointWelcomeText, setPointWelcomeText] = useRecoilState(
    learniacPointWelcomeText
  );

  return (
    <div className="container">
      <form>
        <div className="editorTextColor">Icon-Link eingeben:</div>
        <input
          type="text"
          name="PointWelcomeImage"
          value={pointWelcomeImage}
          onChange={(e) => setPointWelcomeImage(e.target.value)}
        />
        <div className="editorTextColor">Willkommenstext einfügen:</div>
        <textarea
          type="text"
          name="PointWelcomeText"
          rows="5"
          cols="40"
          value={pointWelcomeText}
          onChange={(e) => setPointWelcomeText(e.target.value)}
        />
      </form>
    </div>
  );
}
export default PointWelcome;
