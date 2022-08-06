import {useRecoilValue} from "recoil";
import {ContactState, OverviewState} from "../../services/atoms";

function ViewContacts () {
    const contactObjects = useRecoilValue(ContactState);
    function courseItem({ bild, rolle, name, beschreibung, email}, index) {
        return (
            <div className="vContacts">
                <div className="box">
                    1
                </div>
                <img alt="not found" className="333" width={"250px"} src={bild} />
                <h1 className="0" type="text" >
                    {rolle}
                </h1>
                <label className="1" type="text">
                    {name}
                </label>
                <label className="2" type="text">
                    {beschreibung}
                </label>
                <label className="3" type="text">
                    {email}
                </label>
            </div>
        );
    }
    return (
        <div className="11">
            <div className="22">
                {contactObjects.items.map((beschreibung, index) => {
                    return courseItem(beschreibung, index);
                })}
            </div>
        </div>
    );
}
export default ViewContacts;
