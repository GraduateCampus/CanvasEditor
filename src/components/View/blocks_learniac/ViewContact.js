import { useRecoilValue} from "recoil";
import {
    learniacContactsBild,
    learniacContactsMail,
    learniacContactsMobil,
    learniacContactsName,
    learniacContactsPhone
} from "../../services/atoms";
function ViewContact() {
    const name = useRecoilValue(learniacContactsName);
    const phone = useRecoilValue(learniacContactsPhone);
    const mobil = useRecoilValue(learniacContactsMobil);
    const mail = useRecoilValue(learniacContactsMail);
    const kontaktbild = useRecoilValue(learniacContactsBild);
    return (
        <div className="lvContactBox">
            <div className="boxPadding">
                <div className="lvcTitle">
                    Ansprechpersonen
                </div>
                <div className="lvContactMiniBox">
                    <div className="lvContactTextBox lvcolumn">
                        <div className="lvContactTitle">Kurskoordination</div>
                        <div className="lvContactName">{name}</div>
                        <div className="lvContactText">
                            Haben Sie Fragen oder Anregungen?<br />
                            Kontaktieren Sie mich gerne.
                        </div>
                        <div className="lvContactPhone">{phone}</div>
                        <div className="lvContactMobil">{mobil}</div>
                        <a href="mailto" className="lvContactMail">{mail}</a>
                    </div>
                    <div className="imageBox lvcolumn">
                        <img className="lvContactBild" src={kontaktbild}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ViewContact;
