import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { l1OverviewBoxes } from "../../services/atoms";

function Overview() {
    const [boxes, setBoxes] = useRecoilState(l1OverviewBoxes);
    const [selectedBoxId, setSelectedBoxId] = useState(null);

    const toggleSelectedBox = (id) => {
        if (selectedBoxId === id) {
            setSelectedBoxId(null);
        } else {
            setSelectedBoxId(id);
        }
    };
    const addBox = () => {
        const newBox = { id: Date.now(), icon: '', title: '', nuggets: '', duration: '', modullink: '' };
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
                                    onChange={(e) => update(box.id, "icon", e.target.value)}
                                    placeholder="Icon-Link hier einfügen"
                                />
                                <input
                                    name="title"
                                    value={box.title}
                                    onChange={(e) => update(box.id, "title", e.target.value)}
                                    placeholder="Titel hier einfügen"
                                />
                                <input
                                    name="nuggets"
                                    value={box.nuggets}
                                    onChange={(e) => update(box.id, "nuggets", e.target.value)}
                                    placeholder="Anzahl der Nuggets hier einfügen"
                                />
                                <input
                                    name="duration"
                                    value={box.duration}
                                    onChange={(e) => update(box.id, "duration", e.target.value)}
                                    placeholder="Dauer hier einfügen"
                                />
                                <input
                                    name="modullink"
                                    value={box.modullink}
                                    onChange={(e) => update(box.id, "modullink", e.target.value)}
                                    placeholder="ggf. Modullink einfügen"
                                />
                            </>
                        ) : (
                            <div className="btn-new-chapter" style={{cursor: "default"}}>Karte {index +1}</div>
                        )}
                        </div>
                        <button className="btn-delete-chapter" onClick={() => deleteBox(box.id)}>Karte löschen</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Overview;
