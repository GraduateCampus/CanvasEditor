import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { l2OverviewBoxes } from "../../services/atoms";

function Overview() {
    const [boxes, setBoxes] = useRecoilState(l2OverviewBoxes);
    const [selectedBoxId, setSelectedBoxId] = useState(null);
    const [titleInputs, setTitleInputs] = useState({});

    const toggleSelectedBox = (id) => {
        if (selectedBoxId === id) {
            setSelectedBoxId(null);
        } else {
            setSelectedBoxId(id);
            if (!titleInputs[id]) {
                const currentBox = boxes.find(box => box.id === id);
                setTitleInputs(prev => ({ ...prev, [id]: currentBox ? [...currentBox.titles] : [''] }));
            }
        }
    };

    const addBox = () => {
        const newBox = { id: Date.now(), gifLink: '', titles: [] };
        setBoxes([...boxes, newBox]);
    };

    const deleteBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
    };

    const updateGifLink = (id, link) => {
        setBoxes(boxes.map(box => box.id === id ? { ...box, gifLink: link } : box));
    };

    const addTitleInput = (boxId) => {
        const newTitles = [...(titleInputs[boxId] || []), ''];
        setTitleInputs(prev => ({ ...prev, [boxId]: newTitles }));
    };

    const updateTitleInput = (boxId, index, title) => {
        const newTitles = [...titleInputs[boxId]];
        newTitles[index] = title;
        setTitleInputs(prev => ({ ...prev, [boxId]: newTitles }));
        setBoxes(boxes.map(box => box.id === boxId ? { ...box, titles: newTitles } : box));
    };

    const deleteTitleInput = (boxId, index) => {
        const filteredTitles = titleInputs[boxId].filter((_, idx) => idx !== index);
        setTitleInputs(prev => ({ ...prev, [boxId]: filteredTitles }));
        setBoxes(boxes.map(box => box.id === boxId ? { ...box, titles: filteredTitles } : box));
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
                                value={box.gifLink}
                                onChange={(e) => updateGifLink(box.id, e.target.value)}
                                placeholder="GIF-Link hier einfügen"
                            />
                            {titleInputs[box.id]?.map((title, idx) => (
                                <div key={idx}>
                                    <input
                                        value={title}
                                        onChange={(e) => updateTitleInput(box.id, idx, e.target.value)}
                                        placeholder="Titel einfügen"
                                    />
                                    <button className="btn-delete-chapter" onClick={() => deleteTitleInput(box.id, idx)}>X</button>
                                </div>
                            ))}
                            <button className="btn-new-chapter" onClick={() => addTitleInput(box.id)}>Titel hinzufügen</button>
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
