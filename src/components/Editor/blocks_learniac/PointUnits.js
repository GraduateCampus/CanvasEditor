import {useRecoilState} from "recoil";
import {learniacPointUnits, learniacPointUnitsImage, learniacPointUnitsNumber,} from "../../services/atoms";
function PointUnits() {
    const [pointUnits, setPointUnits] = useRecoilState(learniacPointUnits);
    const [stateImage, setStateImage] = useRecoilState(learniacPointUnitsImage);
    const [unitNumber, setUnitNumber] = useRecoilState(learniacPointUnitsNumber);
    const addUnit = (e) => {
        e.preventDefault();
        setPointUnits([...pointUnits, '']);
    }
    const handleChangeUnit = (id, event) => {
        const newUnits = [...pointUnits];
        newUnits[id] = event.target.value;
        setPointUnits(newUnits);
    }
    const deleteUnit = (id, event) => {
        event.preventDefault();
        const newUnits = [...pointUnits];
        newUnits.splice(id,1);
        setPointUnits(newUnits)
        const newNumber = [...unitNumber];
        newNumber.splice(id,1);
        setUnitNumber(newNumber);
    }
    const handleChangeNumber = (id, event) => {
        const newNumber = [...unitNumber];
        newNumber[id] = event.target.value;
        setUnitNumber(newNumber);
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
                            <div key={index} className="units-wrapper">
                                <div className="units-container">
                                <span>{index+1}. </span>
                                <input
                                    type="text"
                                    value={pointUnits[index]}
                                    onChange={(e) => handleChangeUnit(index, e)}
                                    placeholder="Kapitel einfügen:"
                                />
                                <input
                                    type="text"
                                    value={unitNumber[index]}
                                    onChange={(e) => handleChangeNumber(index, e)}
                                    placeholder="Nummer(Htmlcode) einfügen"
                                />
                                </div>
                                <button className="btn-delete-chapter unit-deletebtn" onClick={(e) => deleteUnit(index, e)}>X</button>
                            </div>
                        ))}
                    </div>
                </div>
        </form>
        </div>
    );

}
export default PointUnits;
