import {useRecoilState} from "recoil";
import {learniacPointUnits, learniacPointUnitsImage,} from "../../services/atoms";
import {useMemo, useState} from "react";

function PointUnits() {
    const [stateImage, setStateImage] = useState("");
    const [pointUnits, setPointUnits] = useRecoilState(learniacPointUnits);
    const [pointUnitsImage, setPointUnitsImage] = useRecoilState(learniacPointUnitsImage);
    const addPointUnitsImage = (e) => {
        e.preventDefault()
        setPointUnitsImage(stateImage);
        setStateImage("");
    }
    const addUnit = () => {
        setPointUnits([...pointUnits, '']);
    }
    const handleChange = (id, event) => {
        const newUnits = [...pointUnits];
        newUnits[id] = event.target.value;
        setPointUnits(newUnits);
    }
    return (
        <div className="container">
            <div className="editorTextColor">Icon-Link eingeben:</div>
            <input
                type="text"
                name="PointUnitsImage"
                value={stateImage}
                onChange={(e) => setStateImage(e.target.value)}
            />
            <button className="editorsubmitbtn" onClick={addPointUnitsImage}>Submit</button>
            <div className="editorTextColor">Kapitel einfügen:</div>
            <button className="editorsubmitbtn" onClick={addUnit}>Add Units</button>
            <div className="lvPointUnitsEditorBox">
                {pointUnits.map((units, index) => (
                    <div key={index}>
                        <span className="lvPointUnitsEditorText">{index+1}</span>
                        <input
                            type="text"
                            value={pointUnits[index]}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Kapitel einfügen:"
                            className="lvPointUnitsEditorbreak"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

}
export default PointUnits;
