import rakete from "../../images/rakete.png";
import {useRecoilValue} from "recoil";
import {KurseinstiegState} from "../../services/atoms";

function ViewKurseinstieg () {
    const einstiegstext = useRecoilValue(KurseinstiegState)
    return (
        <div className="vKurseinstieg">
            <img className="rakete" src={rakete} />
            <h1 className="kurseinstiegtitle">
                Kurseinstieg
            </h1>
            <div className="kursbeschreibung">
                <div className="kursbeschreibungtext">
                    {einstiegstext}
                </div>
            </div>
            <button className="modulbutton">
                Direkt zu den Modulen
            </button>
        </div>
    );
}
export default ViewKurseinstieg;
