import {useState} from "react";

function Contacts() {
    const [dozent, setDozent] = useState('');

    return (
        <div className="container">
            <form className="dropdown-form">
                <label>Bild:</label>
                <input
                    type="text"
                    id="0"
                    value={dozent}
                    placeholder="Bild einfügen"
                    onChange={(e) => setDozent(e.target.value)}
                />
                <button onClick="">
                    Submit
                </button>
                <label>Proffesur:</label>
                <input
                    type="text"
                    id="1"
                    value={dozent}
                    placeholder="Dozent oder was anderes"
                    onChange={(e) => setDozent(e.target.value)}
                />
                <button onClick="">
                    Submit
                </button>
                <label>Name:</label>
                <input
                    type="text"
                    id="2"
                    value={dozent}
                    placeholder="Name"
                    onChange={(e) => setDozent(e.target.value)}
                />
                <button onClick="">
                    Submit
                </button>
                <label>Beschreibung:</label>
                <input
                    type="text"
                    id="3"
                    value={dozent}
                    placeholder="Beschreibung"
                    onChange={(e) => setDozent(e.target.value)}
                />
                <button onClick="">
                    Submit
                </button>
                <label>E-Mail:</label>
                <input
                    type="text"
                    id="4"
                    value={dozent}
                    placeholder="E-Mail"
                    onChange={(e) => setDozent(e.target.value)}
                />
                <button onClick="">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default Contacts;
