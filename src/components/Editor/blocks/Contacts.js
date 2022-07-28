import {useState} from "react";
import {useRecoilState} from "recoil";
import {ContactState} from "../../services/atoms";

function Contacts() {
    const [contactState, setContactState] =
        useRecoilState(ContactState);
    const [show, setShow] = useState([true]);
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
    function contactItem({ bild, rolle, name, beschreibung, email}, index) {
        return (
            <div className="container">
                <div className="buttonsOverview">
                    <button className="standardbtn" onClick={(event) => showChapter(event, index)}>{index}</button>
                    <button className="deletebutton" onClick={(event) => deleteItem(event, index)}>Delete</button>
                </div>
                {show[index] && <div className="dropdown-form">
                    <label>Bild:</label>
                    <input
                        type="text"
                        name="bild"
                        value={bild}
                        placeholder="Bild einfügen"
                        onChange={(value) => itemChanged(value, index)}
                    />
                    <label>Rolle:</label>
                    <input
                        type="text"
                        name="rolle"
                        value={rolle}
                        placeholder="Dozent oder was anderes"
                        onChange={(value) => itemChanged(value, index)}
                    />
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={(value) => itemChanged(value, index)}
                    />
                    <label>Beschreibung:</label>
                    <input
                        type="text"
                        name="beschreibung"
                        value={beschreibung}
                        placeholder="Beschreibung"
                        onChange={(value) => itemChanged(value, index)}
                    />
                    <label>E-Mail:</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="E-Mail"
                        onChange={(value) => itemChanged(value, index)}
                    />
                </div>}
            </div>
        );
    }
    return (
        <ul className="contacts-ul">
            <li className="contacts-ul">
                <form className="dropdown-form">
                    {contactState.items.map((item, index) => {
                        return contactItem(item, index);
                    })}
                    <button className="submitbtn" onClick={makeNewItem}>
                        New Item
                    </button>
                </form>
            </li>
        </ul>
    );
}
export default Contacts;
