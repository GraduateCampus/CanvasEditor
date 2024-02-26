import { useRecoilValue} from "recoil";
import {
    learniacContactsHeader, learniacContactsHeader2,
    learniacContactsMail,
    learniacContactsMobil,
    learniacContactsName,
    learniacContactsPhone, learniacContactsText
} from "../../services/atoms";
function ViewContact() {
    const header1 = useRecoilValue(learniacContactsHeader);
    const header2 = useRecoilValue(learniacContactsHeader2);
    const text = useRecoilValue(learniacContactsText);
    const name = useRecoilValue(learniacContactsName);
    const phone = useRecoilValue(learniacContactsPhone);
    const mobil = useRecoilValue(learniacContactsMobil);
    const mail = useRecoilValue(learniacContactsMail);
    return (
        <div className="lvContactBox">
            <div className="boxPadding">
                <div className="lvcTitle">
                    {header1}
                </div>
                <div className="lvContactMiniBox">
                    <div className="lvContactTextBox lvcolumn">
                        <div className="lvContactTitle">{header2}</div>
                        <div className="lvContactName">{name}</div>
                        <div className="lvContactText">
                            {text}
                        </div>
                        <div className="lvContactPhone">{phone}</div>
                        <div className="lvContactMobil">{mobil}</div>
                        <a href="mailto" className="lvContactMail">{mail}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ViewContact;
