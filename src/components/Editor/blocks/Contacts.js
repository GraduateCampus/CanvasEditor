import {useState} from "react";
import {useRecoilState} from "recoil";
import {ContactAvatar, ContactState} from "../../services/atoms";

function Contacts() {
    const [contactState, setContactState] = useRecoilState(ContactState);
    const [contactAvatar, setContactAvatar] = useRecoilState(ContactAvatar);
    const [show, setShow] = useState([true]);
    const [avatar, setAvatar] = useState("");
    const makeNewItem = (e) => {
        setContactState((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                {
                    bild:"",
                    rolle:"",
                    name:"",
                    beschreibung:"",
                    email:"",
                },
            ],
        }));
        e.preventDefault();
        setShow(oldArray => [...oldArray, true]);
    };
    const itemChanged = ({ target: { value, name } }, index) => {
        let items = [...contactState.items];
        let item = { ...items[index] };
        item[name] = value;
        items[index] = item;
        setContactState((prev) => ({
            ...prev,
            items: items,
        }));
    };
    const deleteItem = (event, index) => {
        let items = [...contactState.items];
        let newArr = [...show];
        if (index !== -1) {
            items.splice(index, 1);
            newArr.splice(index, 1);
            setContactState((prev) => ({
                ...prev,
                items: items,
            }));
            setShow(newArr);
        }
        event.preventDefault();
    };
    const showChapter = (event, index) => {
        event.preventDefault();
        let newArr = [...show];
        if (newArr[index] === true) {
            newArr[index] = false;
            setShow(newArr);
        } else {
            newArr[index] = true;
            setShow(newArr);
        }
    }
    const addImage = (e) => {
        e.preventDefault()
        var avatarlink = document.getElementById("10");
        if (avatarlink && avatarlink.value) {
            setContactAvatar(avatar);
            setAvatar("");
        }
    }
    function contactItem({ bild, rolle, name, beschreibung, email}, index) {
        return (
            <div className="courseItemBigWrapper" key={index}>
                <div className="buttonsOverview">
                    <button className="standardbtn" onClick={(event) => showChapter(event, index)}>Kontakt Nummer:{index +1}</button>
                    <button className="editorsubmitbtn" onClick={(event) => deleteItem(event, index)}>Delete</button>
                </div>
                {show[index] && <div className="dropdown-form">
                    <div className="ov">
                        <div className="ov">Bild:</div>
                        <input
                            type="text"
                            name="bild"
                            value={bild}
                            placeholder="Bild einfügen"
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                    <div className="ov">
                        <div className="ov">Rolle:</div>
                        <input
                            type="text"
                            name="rolle"
                            value={rolle}
                            placeholder="Dozent oder was anderes"
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                    <div className="ov">
                        <div className="ov">Name:</div>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                    <div className="ov">
                        <div className="ov">Beschreibung:</div>
                        <input
                            type="text"
                            name="beschreibung"
                            value={beschreibung}
                            placeholder="Beschreibung"
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                    <div className="ov">
                        <div className="ov">E-Mail:</div>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="E-Mail"
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                </div>}
            </div>
        );
    }
    return (
        <ul className="overview-ul">
            <li className="overview-li">
                <div className="editorTextColor">
                    Kontakte:
                </div>
                <form className="dropdown-form">
                    {contactState.items.map((item, index) => {
                        return contactItem(item, index);
                    })}
                    <button className="submitbtn" onClick={makeNewItem}>
                        New Item
                    </button>
                    <div className="editorTextColor">
                        Hier Avatar einfügen:
                        <div className="ov">
                            <input
                                type="text"
                                id="10"
                                value={avatar}
                                placeholder="Bildlink hier einfügen"
                                onChange={(e) => setAvatar(e.target.value)}
                            />
                        </div>
                        <button className="editorsubmitbtn" onClick={addImage}>
                            Submit
                        </button>
                    </div>
                </form>
            </li>
        </ul>
    );
}
export default Contacts;
