import headerimgbg from "../images/Headerbild_ObjProg.png";
import {useRecoilState, useRecoilValue} from "recoil";
import {kursnameState, welcomeHeaderState} from "../services/atoms";

function ViewWelcomeBox() {
    const [header, setHeaderState] = useRecoilState(welcomeHeaderState)
    const kname = useRecoilValue(kursnameState);
    const deletewText = (id) =>  {
        const newWtext = header.filter((_, item) => item !== id);
        setHeaderState(newWtext);
    }
    return (
        <div className="vWelcomeBox">
            <img className="headerimage" src={headerimgbg} />
            <div className="headline">
                {header.map((item, index) => (
                    <div key={index}>
                        {item}
                        <button className="deletebutton" onClick={() => deletewText(index)}>
                            X
                        </button>
                    </div>
                ))}
            </div>
            <div className="kursname">
                {kname}
            </div>
        </div>
    );
}
export default ViewWelcomeBox;
