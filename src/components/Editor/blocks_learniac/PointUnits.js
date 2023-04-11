import {useRecoilState} from "recoil";
import {learniacPointUnits, learniacPointUnitsImage,} from "../../services/atoms";
function PointUnits() {
    const [pointUnits, setPointUnits] = useRecoilState(learniacPointUnits);
    const [stateImage, setStateImage] = useRecoilState(learniacPointUnitsImage);

    const addUnit = (e) => {
        e.preventDefault();
        setPointUnits([...pointUnits, '']);
    }
    const handleChange = (id, event) => {
        const newUnits = [...pointUnits];
        newUnits[id] = event.target.value;
        setPointUnits(newUnits);
    }
    const deleteUnit = (id, event) => {
        event.preventDefault();
        const newUnits = [...pointUnits];
        newUnits.splice(id,1);
        setPointUnits(newUnits)
    }
    return (
        <div className="container">
            <form>
                <div>Icon-Link eingeben:</div>
                    <input
                        type="text"
                           name="PointUnitsImage"
                        value={stateImage}
                        onChange={(e) => setStateImage(e.target.value)}
                    />
                <div>Kapitel einfügen:</div>
                <div className="chapter-wrapper">
                    <button className="btn-chapter" onClick={addUnit}>Einheit hinzufügen</button>
                    <div className="">
                        {pointUnits.map((units, index) => (
                            <div key={index}>
                                <span>{index+1}. </span>
                                <input
                                    type="text"
                                    value={pointUnits[index]}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Kapitel einfügen:"
                                />
                                <button className="btn-delete-chapter" onClick={(e) => deleteUnit(index, e)}>X</button>
                            </div>
                        ))}
                    </div>
                </div>
        </form>
        </div>
    );

}
export default PointUnits;
