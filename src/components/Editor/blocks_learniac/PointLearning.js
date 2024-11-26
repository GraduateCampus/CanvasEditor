import { useRecoilState } from "recoil";
import {
  learniacPointLearningImage,
  learniacPointLearningText,
} from "../../services/atoms";

function PointLearning() {
  const [pointLearningText, setPointLearningText] = useRecoilState(
    learniacPointLearningText
  );
  const [pointLearningImage, setPointLearningImage] = useRecoilState(
    learniacPointLearningImage
  );

  return (
    <div className="container">
      <form>
        <div className="editorTextColor">Icon-Link eingeben:</div>
        <input
          type="text"
          name="PointLearningImage"
          value={pointLearningImage}
          onChange={(e) => setPointLearningImage(e.target.value)}
        />
        <div className="editorTextColor">Learningtext einfügen:</div>
        <textarea
          type="text"
          name="PointLearningText"
          rows="5"
          cols="40"
          value={pointLearningText}
          onChange={(e) => setPointLearningText(e.target.value)}
        />
      </form>
    </div>
  );
}
export default PointLearning;
