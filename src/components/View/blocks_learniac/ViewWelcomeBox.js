import { useRecoilValue } from "recoil";
import { learniacWelcomeText } from "../../services/atoms";

function ViewWelcomeBox() {
  const header = useRecoilValue(learniacWelcomeText);
  return (
    <div className="lvWelcomeBox">
      <span className="lvWelcomeHeadline">{header}</span>
    </div>
  );
}
export default ViewWelcomeBox;
