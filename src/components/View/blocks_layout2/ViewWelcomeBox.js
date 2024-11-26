import {
  l2WelcomeBackground,
  l2WelcomeCourseName,
  l2WelcomeCourseName2,
  l2WelcomeHeadline,
} from "../../services/atoms";
import { useRecoilValue } from "recoil";

function ViewWelcomeBox() {
  const welcomeBackground = useRecoilValue(l2WelcomeBackground);
  const welcomeText = useRecoilValue(l2WelcomeHeadline);
  const welcomeCourse = useRecoilValue(l2WelcomeCourseName);
  const welcomeCourse2 = useRecoilValue(l2WelcomeCourseName2);
  return (
    <div className="vWelcomeBox">
      <img
        className="headerimage"
        alt="headerimage"
        src={welcomeBackground}
      ></img>
      <div className="headline">{welcomeText}</div>
      <div className="kursname">{welcomeCourse}</div>
      <div className="kursname2">{welcomeCourse2}</div>
    </div>
  );
}
export default ViewWelcomeBox;
