import { useRecoilState } from "recoil";
import {
  learniacPointCourseImage,
  learniacPointCourseText,
} from "../../services/atoms";

function PointCourse() {
  const [pointCourseText, setPointCourseText] = useRecoilState(
    learniacPointCourseText
  );
  const [pointCourseImage, setPointCourseImage] = useRecoilState(
    learniacPointCourseImage
  );

  return (
    <div className="container">
      <form>
        <div className="editorTextColor">Icon-Link eingeben:</div>
        <input
          type="text"
          name="PointCourseImage"
          value={pointCourseImage}
          onChange={(e) => setPointCourseImage(e.target.value)}
        />
        <div className="editorTextColor">Kurstext einfügen:</div>
        <textarea
          type="text"
          name="PointCourseText"
          rows="5"
          cols="40"
          value={pointCourseText}
          onChange={(e) => setPointCourseText(e.target.value)}
        />
      </form>
    </div>
  );
}
export default PointCourse;
