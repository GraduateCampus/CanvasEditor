import {useRecoilState} from "recoil";
import {
    learniacContactsBild,
    learniacContactsMail,
    learniacContactsMobil,
    learniacContactsName,
    learniacContactsPhone
} from "../../services/atoms";
import {useState} from "react";

function Contacts() {
    const [stateContactsName, setStateContactsName] = useState("");
    const [stateContactsPhone, setStateContactsPhone] = useState("");
    const [stateContactsMobil, setStateContactsMobil] = useState("");
    const [stateContactsMail, setStateContactsMail] = useState("");
    const [stateContactsBild, setStateContactsBild] = useState("");
    const [contactsName, setContactsName] = useRecoilState(learniacContactsName);
    const [contactsPhone, setContactsPhone] = useRecoilState(learniacContactsPhone);
    const [contactsMobil, setContactsMobil] = useRecoilState(learniacContactsMobil);
    const [contactsMail, setContactsMail] = useRecoilState(learniacContactsMail);
    const [contactsBild, setContactsBild] = useRecoilState(learniacContactsBild);

    const addContactName = (e) => {
        setContactsName(e);
        setStateContactsName("");
    }
    const addContactPhone = (e) => {
        setContactsPhone(e);
        setStateContactsPhone("");
    }
    const addContactMobil = (e) => {
        setContactsMobil(e);
        setStateContactsMobil("");
    }
    const addContactMail = (e) => {
        setContactsMail(e);
        setStateContactsMail("");
    }
    const addContactBild = (e) => {
        setContactsBild(e);
        setStateContactsBild("");
    }
    return (
        <div className="container">
            <div className="editorTextColor">Kontaktnamen einfügen:</div>
            <input
                type="text"
                name="stateContactsName"
                value={stateContactsName}
                onChange={(e) => setStateContactsName(e.target.value)}
            />
            <button id="1" className="editorsubmitbtn" onClick={event => addContactName(stateContactsName)}>Submit</button>
            <div className="editorTextColor">Nummer einfügen:</div>
            <input
                type="text"
                name="stateContactsPhone"
                value={stateContactsPhone}
                onChange={(e) => setStateContactsPhone(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={event => addContactPhone(stateContactsPhone)}>Submit</button>
            <div className="editorTextColor">Mobilnummer einfügen:</div>
            <input
                type="text"
                name="stateContactsMobil"
                value={stateContactsMobil}
                onChange={(e) => setStateContactsMobil(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={event => addContactMobil(stateContactsMobil)}>Submit</button>
            <div className="editorTextColor">E-Mail einfügen:</div>
            <input
                type="text"
                name="stateContactsMail"
                value={stateContactsMail}
                onChange={(e) => setStateContactsMail(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={event => addContactMail(stateContactsMail)}>Submit</button>
            <div className="editorTextColor">Bild einfügen:</div>
            <input
                type="text"
                name="stateContactsBild"
                value={stateContactsBild}
                onChange={(e) => setStateContactsBild(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={event => addContactBild(stateContactsBild)}>Submit</button>
        </div>
    );
}
export default Contacts;
