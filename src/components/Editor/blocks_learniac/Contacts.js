import {useRecoilState} from "recoil";
import {
    learniacContactsMail,
    learniacContactsMobil,
    learniacContactsName,
    learniacContactsPhone
} from "../../services/atoms";

function Contacts() {
    const [contactsName, setContactsName] = useRecoilState(learniacContactsName);
    const [contactsPhone, setContactsPhone] = useRecoilState(learniacContactsPhone);
    const [contactsMobil, setContactsMobil] = useRecoilState(learniacContactsMobil);
    const [contactsMail, setContactsMail] = useRecoilState(learniacContactsMail);

    return (
        <div className="container">
            <form>
            <div>Kontaktnamen einfügen:</div>
            <input
                type="text"
                name="stateContactsName"
                value={contactsName}
                onChange={(e) => setContactsName(e.target.value)}
            />
            <div className="editorTextColor">Nummer einfügen:</div>
            <input
                type="text"
                name="stateContactsPhone"
                value={contactsPhone}
                onChange={(e) => setContactsPhone(e.target.value)}
            />
            <div className="editorTextColor">Mobilnummer einfügen:</div>
            <input
                type="text"
                name="stateContactsMobil"
                value={contactsMobil}
                onChange={(e) => setContactsMobil(e.target.value)}
            />
            <div className="editorTextColor">E-Mail einfügen:</div>
            <input
                type="text"
                name="stateContactsMail"
                value={contactsMail}
                onChange={(e) => setContactsMail(e.target.value)}
            />
            </form>
        </div>
    );
}
export default Contacts;
