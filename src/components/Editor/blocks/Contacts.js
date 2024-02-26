import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {l1ContactBoxes} from "../../services/atoms";

function Contacts() {
    const [boxes, setBoxes] = useRecoilState(l1ContactBoxes);
    const [selectedBoxId, setSelectedBoxId] = useState(null);
    const toggleSelectedBox = (id) => {
        if (selectedBoxId === id) {
            setSelectedBoxId(null);
        } else {
            setSelectedBoxId(id);
        }
    };
    const addBox = () => {
        const newBox = { id: Date.now(), icon: '', description: '', name: '', number: '', mail: '' };
        setBoxes([...boxes, newBox]);
    };
    const deleteBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
    };
    const update = (id, field, value) => {
        setBoxes(boxes.map(box =>
            box.id === id ? {...box, [field]: value } : box
        ));
    };
    return (
        <div className="dropdown-form">
            <button className="btn-chapter" onClick={addBox}>Karte hinzufügen</button>
            {boxes.map((box, index) => (
                <div key={box.id}>
                    <div className="chapter-wrapper">
                        <button className="btn-chapter" onClick={() => toggleSelectedBox(box.id)}>
                            {selectedBoxId === box.id ? 'Karte schließen' : 'Karte editieren'}
                        </button>
                        <div>{selectedBoxId === box.id ? (
                            <>
                                <input
                                    name="icon"
                                    value={box.icon}
                                    onChange={(e) => update(box.id,"icon", e.target.value)}
                                    placeholder="Icon-Link hier einfügen"
                                />
                                <input
                                    name="description"
                                    value={box.description}
                                    onChange={(e) => update(box.id,"description", e.target.value)}
                                    placeholder="Beschreibung hier einfügen"
                                />
                                <input
                                    name="name"
                                    value={box.name}
                                    onChange={(e) => update(box.id,"name", e.target.value)}
                                    placeholder="Name hier einfügen"
                                />
                                <input
                                    name="number"
                                    value={box.number}
                                    onChange={(e) => update(box.id,"number", e.target.value)}
                                    placeholder="Telefonnummer hier einfügen"
                                />
                                <input
                                    name="mail"
                                    value={box.mail}
                                    onChange={(e) => update(box.id,"mail", e.target.value)}
                                    placeholder="E-Mail hier einfügen"
                                />
                            </>
                        ) : (
                            <div className="btn-new-chapter" style={{cursor: "default"}}>Kontakt {index +1}</div>
                        )}
                        </div>
                        <button className="btn-delete-chapter" onClick={() => deleteBox(box.id)}>Karte löschen</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contacts;
